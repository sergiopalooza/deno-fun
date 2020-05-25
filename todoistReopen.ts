const res = await fetch("https://api.todoist.com/rest/v1/tasks/2860758634/reopen", {
    method: "POST",
    headers: {
     "Authorization": `Bearer ${Deno.env.get('TODO_AUTH')}`
    }
});

console.log(res);

