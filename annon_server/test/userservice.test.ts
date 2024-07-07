import { hashPassword, createCredentials, createEncryptionKey, getUserData_W_UNAME_PWORD} from "../services/user_services";

test('Test to see if hashPassword retuns a hashed version of a string', () => { 
    expect(hashPassword('test1!')).toBe('7c4a7b676e873b49d643151b7675e9b51040be4bd64bfdcd0517430942ac5b0b');
})

test('Test to see if hashPassword retuns a hashed version of a string', () => { 
    expect(hashPassword('Test1!')).toBe('0e3246dc869aa660163b186fbf002393d2405f322660341d2c666fd0c8362143');
})

test('Check if createCredentials adds the same user with the same username twice', async () => { 
    let error = 1; //Set error to 1
    await createCredentials('tyler', 'tyler1', "randomkey").catch(e => { 
        error = 0;  
        //If promise resolves error catch statement will set the to 0
        //It s
    });
    expect(error).toBe(0);  // Correct usage of `expect` with `toBe`
});

test('Test to see if encryption key is created', () => {
    expect(createEncryptionKey('test')).toBe('ce0f6c28b5869ff166714da5fe08554c70c731a335ff9702e38b00f81ad348c6');
})


test('Get user data using username and password', async() => { 
    const hashedPassword = hashPassword('letmein1')
    expect(await getUserData_W_UNAME_PWORD('tyler', hashedPassword)).toEqual([{"id": 66, "key": "3d074cac28b7961ec4a171d46ed73d184d6722f418bb515be5426a98eef91678", "password": hashedPassword, "role": "admin", "username": "tyler"}]);
})

