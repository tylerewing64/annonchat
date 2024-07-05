import { hashPassword, createCredentials, createEncryptionKey} from "../services/user_services";

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
    expect(createEncryptionKey('us')).toBe('79adb2a2fce5c6ba215fe5f27f532d4e7edbac4b6a5e09e1ef3a08084a904621');
})
