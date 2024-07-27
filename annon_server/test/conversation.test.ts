import { CHECK_IF_CONVO_EXIST, CREATE_CONVERSATION, GET_CONVERSATIONS } from "../services/message_services";




test("Testing to see if we can check if a conversation exist", async() => { 
    const response = await CHECK_IF_CONVO_EXIST("tyler","angelo");

    expect(response).toBe(true);
})

test("Testing to see if we can get conversations", async() => { 
    const response = await GET_CONVERSATIONS("tyler");
    expect(typeof response).toBe("object");
})
