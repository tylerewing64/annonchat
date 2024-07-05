import { hashPassword } from "../services/user_services";


test('Test to see if hashPassword retuns a hashed version of a string', () => { 
    expect(hashPassword('test1!')).toBe('7c4a7b676e873b49d643151b7675e9b51040be4bd64bfdcd0517430942ac5b0b');
})

test('Test to see if hashPassword retuns a hashed version of a string', () => { 
    expect(hashPassword('Test1!')).toBe('0e3246dc869aa660163b186fbf002393d2405f322660341d2c666fd0c8362143');
})