import { type Color, switch_color } from "./utils"

export class Player {
	constructor(
		private _id: string,
		private _name: string,
		private _color: Color
	) {}

	public get id(): string {
		return this._id
	}

	public get name(): string {
		return this._name
	}

	public get color(): Color {
		return this._color
	}

	public switch_color(): void {
		this._color = switch_color(this._color)
	}

	public update_name(name: string): void {
		this._name = name
	}
}
