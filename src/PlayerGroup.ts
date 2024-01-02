import { Player } from "./Player"
import { random_color, switch_color } from "./utils"

export class PlayerGroup {
	private _players: Player[] = []

	public get players(): Player[] {
		return this._players
	}

	private create_player(player_id: string, name: string): Player {
		const first_player = this._players[0]

		if (first_player) {
			const color = switch_color(first_player.color)
			const second_player = new Player(player_id, name, color)
			this._players.push(second_player)
			return second_player
		}

		const new_player = new Player(player_id, name, random_color())

		this._players.push(new_player)
		return new_player
	}

	public add_player(player_id: string, name: string): Player | undefined {
		const existing_player = this._players.find(
			(player) => player.id === player_id
		)

		if (existing_player) {
			existing_player.update_name(name)
			return existing_player
		}

		if (this.is_full()) return undefined

		return this.create_player(player_id, name)
	}

	public is_full(): boolean {
		return this._players.length === 2
	}

	public switch_colors(): void {
		this._players.forEach((player) => player.switch_color())
	}
}
