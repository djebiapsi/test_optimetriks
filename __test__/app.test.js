const app = require('../app.js')

describe('Palindrome', () => {
    it ('should verify if i can read a word reversed', () => {
        expect(app.word).toBe(app.word.split('').reverse().join(''))
        
    })
    
})