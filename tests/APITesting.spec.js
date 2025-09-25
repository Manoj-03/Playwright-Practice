import {test,expect} from '@playwright/test';

var userId;

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