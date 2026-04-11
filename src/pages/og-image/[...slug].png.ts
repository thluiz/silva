import { Resvg } from "@resvg/resvg-js";
import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import RobotoMonoBold from "@/assets/roboto-mono-700.ttf";
import RobotoMono from "@/assets/roboto-mono-regular.ttf";
import NotoSansSC from "@/assets/noto-sans-sc-400.woff";
import NotoSansSCBold from "@/assets/noto-sans-sc-700.woff";
import { getAllPosts } from "@/data/post";

import { ogMarkup } from "./_ogMarkup";

const ogOptions: SatoriOptions = {
	// debug: true,
	fonts: [
		{
			data: Buffer.from(RobotoMono),
			name: "Roboto Mono",
			style: "normal",
			weight: 400,
		},
		{
			data: Buffer.from(RobotoMonoBold),
			name: "Roboto Mono",
			style: "normal",
			weight: 700,
		},
		{
			data: Buffer.from(NotoSansSC),
			name: "Noto Sans SC",
			style: "normal",
			weight: 400,
		},
		{
			data: Buffer.from(NotoSansSCBold),
			name: "Noto Sans SC",
			style: "normal",
			weight: 700,
		},
	],
	height: 630,
	width: 1200,
};

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
	const { pubDate, title, description, tags } = context.props as Props;

	const postDate = pubDate.toISOString().slice(0, 10);
	const svg = await satori(ogMarkup(title, postDate, description, tags), ogOptions);
	const pngBuffer = new Resvg(svg).render().asPng();
	const png = new Uint8Array(pngBuffer);
	return new Response(png, {
		headers: {
			"Cache-Control": "public, max-age=31536000, immutable",
			"Content-Type": "image/png",
		},
	});
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return posts
		.values()
		.filter(({ data }) => !data.ogImage)
		.map((post) => ({
			params: { slug: post.id },
			props: {
				pubDate: post.data.updatedDate ?? post.data.publishDate,
				title: post.data.title,
				description: post.data.description,
				tags: post.data.tags,
			},
		}))
		.toArray();
}
