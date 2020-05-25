const taskIds: Array<string> = [
    "2860758634",
    "2860758746",
    "2860758827",
    "2860758890",
    "2860759323",
    "2860759392",
    "2860759514",
    "2860759978",
    "2872976681",
    "2881372327",
    "3123760866",
    "3222988201",
    "3407676009",
    "3412514316"
];


async function openTasks (tasks: Array<string>){
    for (const task of tasks) {
        console.log(task);
        await fetch(`https://api.todoist.com/rest/v1/tasks/${task}/reopen`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${Deno.env.get('TODO_AUTH')}`
            }
        })
    }
}

await openTasks(taskIds);