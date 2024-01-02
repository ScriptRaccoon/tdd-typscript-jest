import { Player } from "./Player"

describe("Player class", () => {
	let player: Player

	beforeEach(() => {
		player = new Player("123", "marie", "white")
	})

	it("generates a player with name, color, and id", () => {
		expect(player.name).toBe("marie")
		expect(player.color).toBe("white")
		expect(player.id).toBe("123")
	})

	it("should switch their color", () => {
		expect(player.color).toBe("white")
		player.switch_color()
		expect(player.color).toBe("black")
	})

	it("should update their name", () => {
		player.update_name("maria")
		expect(player.name).toBe("maria")
	})
})
