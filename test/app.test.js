const {addTask} = require('../js/logic.js');

describe("To Do Web App", () => {
    // Test Add Task Function
    test("Should Return Array Of Tasks", () => {
        let actual = addTask("Go To Doctor", "21-09-2001", "12:00 PM");
        let expected = [
            {
                id: Date.now(),
                title: "Go To Doctor",
                day: "21-09-2001",
                time: "12:00 PM"
            }
        ];

        expect(expected).toEqual(actual);
    })
});
