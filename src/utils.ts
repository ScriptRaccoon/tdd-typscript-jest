export type Color = "white" | "black"

export function switch_color(color: Color): Color {
	return color === "white" ? "black" : "white"
}

export function random_color(): Color {
	return Math.random() < 0.5 ? "white" : "black"
}
