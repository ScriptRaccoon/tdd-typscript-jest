import { random_color, switch_color } from "./utils"

describe("utils", () => {
	describe("switch_color", () => {
		it("should change white to black", () => {
			expect(switch_color("white")).toBe("black")
		})

		it("should change black to white", () => {
			expect(switch_color("black")).toBe("white")
		})
	})

	describe("random_color", () => {
		it("should return either white or black randomly", () => {
			expect(["white", "black"]).toContain(random_color())
		})

		it("should return white when Math.random() returns 0.25", () => {
			jest.spyOn(Math, "random").mockReturnValue(0.25)
			expect(random_color()).toBe("white")
		})

		it("should return black when Math.random() returns 0.75", () => {
			jest.spyOn(Math, "random").mockReturnValue(0.75)
			expect(random_color()).toBe("black")
		})
	})
})
