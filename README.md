# TranslateRepro

Run `npm run test` to execute the tests. Please comment / uncomment lines 10-12 in `app.component.ts` depending on instructions to see the following behavior:

1. **only line 10 is active**: you see `TypeError: Cannot read property 'translate' of undefined`
2. **line 10 and line 12 are active**: no error, but test fails, because key is not translated
3. **line 10 and line 11 are ative**: no error, but test fails, because key is not translated

So the error does actually go away, if the `TranslocoService` is imported in the component, even though it is not used.
Nonetheless, the translation is not working, even though when running the application, you will see that the translation does work.
