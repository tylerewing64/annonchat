import { createToken, extractJwtPayload } from "../services/authentication_service";

test("Test to make sure create Token creates a token", () => { 
    expect(createToken({id: 1, username: "Tyler", role: "user"})).toBeTruthy;
})



test("Test to see if object returned from extractJwtPayload is the payload object", () => { 
    const testToken = createToken({id: 1, username: "Tyler", role: "user"});
    expect(extractJwtPayload(testToken)).toMatchObject({id: 1, username: "Tyler", role: "user" });
})

test("Test if extract JWT Payload returns null if JWT token does not exist", () => { 
   const testToken = "test"
    expect(extractJwtPayload(testToken)).toBeFalsy;
})