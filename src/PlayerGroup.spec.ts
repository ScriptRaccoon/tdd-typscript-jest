import { PlayerGroup } from "./PlayerGroup"

jest.mock("./utils", () => ({
	...jest.requireActual("./utils"),
	random_color: () => "white",
}))

describe("PlayerGroup", () => {
	let group: PlayerGroup

	beforeEach(() => {
		jest.clearAllMocks()
		group = new PlayerGroup()
	})

	it("should add a player to the players array", () => {
		const marie = group.add_player("134", "marie")
		expect(marie).toBeDefined()
		expect(marie?.name).toBe("marie")
		expect(group.players.length).toBe(1)
		expect(group.players[0].name).toBe("marie")
	})

	it("is full when it has two players", () => {
		expect(group.is_full()).toBe(false)
		group.add_player("123", "marie")
		expect(group.is_full()).toBe(false)
		group.add_player("456", "paul")
		expect(group.is_full()).toBe(true)
	})

	it("does not add players when it is full", () => {
		group.add_player("123", "marie")
		group.add_player("456", "paul")
		const pierre = group.add_player("789", "pierre")
		expect(pierre).toBeUndefined()
		expect(group.players.length).toBe(2)
	})

	it("should assign random colors", () => {
		const marie = group.add_player("123", "marie")
		const paul = group.add_player("456", "paul")
		expect(marie?.color).toBe("white")
		expect(paul?.color).toBe("black")
	})

	it("should switch colors", () => {
		const marie = group.add_player("123", "marie")
		const paul = group.add_player("456", "paul")
		expect(marie?.color).toBe("white")
		expect(paul?.color).toBe("black")
		group.switch_colors()
		expect(marie?.color).toBe("black")
		expect(paul?.color).toBe("white")
	})

	it("updates the player when their ID is already in the group", () => {
		group.add_player("123", "marie")
		group.add_player("123", "marienew")
		expect(group.players.length).toBe(1)
		expect(group.players[0].name).toBe("marienew")
	})
})
