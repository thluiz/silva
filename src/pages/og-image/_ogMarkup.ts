import { html } from "satori-html";

const MAX_TITLE = 90;
const MAX_DESC = 250;

function truncate(str: string, max: number) {
	return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

export const ogMarkup = (
	title: string,
	pubDate: string,
	description?: string,
	tags?: string[],
) => {
	const safeTitle = truncate(title, MAX_TITLE);
	const safeDesc = description ? truncate(description, MAX_DESC) : "";
	const tagStr = tags?.slice(0, 3).map((t) => `#${t}`).join("  ") ?? "";

	const template = `<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]" style="font-family: Roboto Mono">
		<div tw="flex flex-col w-full px-16 pt-10">
			<p tw="text-4xl mb-4" style="color: #9ca3af">silva.thluiz.com</p>
			<h1 tw="text-5xl font-bold leading-tight text-white m-0">${safeTitle}</h1>
		</div>
		${safeDesc ? `<div tw="flex w-full px-16 mt-4"><p tw="text-3xl leading-snug m-0" style="color: #b8b8b8">${safeDesc}</p></div>` : ""}
		<div tw="flex flex-col mt-auto w-full px-16 pb-8">
			<div tw="flex items-center text-3xl">
				<p tw="font-bold" style="color: #4cc908">T L Si -</p>
				<p tw="ml-2 font-bold" style="font-family: Noto Sans SC; color: #c81e1e">知友士</p>
				<p tw="ml-6" style="color: #9ca3af">${pubDate}</p>
			</div>
			${tagStr ? `<div tw="flex justify-end text-2xl mt-1"><p style="color: #84a59d">${tagStr}</p></div>` : ""}
		</div>
	</div>`;

	return html(template);
};
