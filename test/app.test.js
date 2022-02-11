const {addTask, editTask} = require('../js/logic.js');

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
        ]

        expect(expected).toEqual(actual);
    });

    // Test Edit Task Function
    test("Should Return The Task After Edited", () => {
        let actual = editTask(
            {
                id: Date.now(),
                title: "Go To Doctor",
                day: "21-09-2001",
                time: "12:00 PM"
            },
            "Go To Karam Edited",
            "22-09-2001",
            "11:00 AM"
        );
        let expected = {
                id: Date.now(),
                title: "Go To Karam Edited",
                day: "22-09-2001",
                time: "11:00 AM"
            }

        expect(expected).toEqual(actual);
    })
});
