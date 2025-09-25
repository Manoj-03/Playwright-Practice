import {test,expect} from '@playwright/test';

test.describe.serial("User API CRUD", () =>{ 
    let userId;

    test("Get Users - GET", async({request}) => {
        const response = await request.get("https://reqres.in/api/users",
            {
                headers: {"Accept":"application/json","x-api-key":"reqres-free-v1"}
            }
        );
        console.log(await response.json());
        expect(response.status()).toBe(200);
    })

    test("Create User - POST", async({request}) => {
        const response = await request.post("https://reqres.in/api/users",
            {
                data: { "name": "Mahesh", "job":"Hero"},   // request body
                headers: {"Accept":"application/json","x-api-key":"reqres-free-v1"}
            }
        );
        console.log(await response.json());
        expect(response.status()).toBe(201);

        var res=await response.json();
        userId=res.id;
    })

    test("Update User - PUT", async({request}) => {
        const response = await request.put("https://reqres.in/api/users/"+userId,
            {
                data: { "name": "Mahesh", "job":"Actor"},   // request body
                headers: {"Accept":"application/json","x-api-key":"reqres-free-v1"}
            }
        );
        console.log(await response.json());
        expect(response.status()).toBe(200);

    })

    test("Delete User - DELETE", async({request}) => {
        const response = await request.delete("https://reqres.in/api/users/"+userId,
            {
                headers: {"Accept":"application/json","x-api-key":"reqres-free-v1"}
            }
        )
        expect(response.status()).toBe(204);
    })
})

/*
    Playwright API Testing Notes:

        1. Fixtures:
            - {request} → For API calls (GET, POST, PUT, DELETE)
            - {page}    → For UI testing

        2. Common Methods:
            - request.get(url, options)    → GET request
            - request.post(url, {data})    → POST request
            - request.put(url, {data})     → PUT request (update)
            - request.delete(url)          → DELETE request

        3. Response Handling:
            - response.status() → HTTP status code
            - response.ok()     → true if 200–299
            - response.json()   → JSON body
            - response.text()   → raw text
            - response.body()   → raw buffer
            - response.headers() → headers object

        4. Test Execution:
            - By default, tests run in parallel in separate workers.
            - Dependent API tests (like CRUD using the same userId) need `test.describe.serial()`.
            - Independent tests can safely run in parallel.

        5. Best Practices:
            - Avoid shared global variables for parallel tests.
            - Use `test.describe.serial()` for tests that depend on order.
            - Use reusable functions to create/update/delete data if needed.
            - Always validate response status and optionally body.
*/