<script>
    import {Input, Button, Label, Layout} from 'flowbite-svelte';

    let foo = 'baz'
    let bar = 'qux'
    let result = null

    async function getProfile () {
        const res = await fetch('https://codecombos.vercel.app/api/sendusers?email=testing@ss.com/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const json = await res.json()
        result = JSON.stringify(json)
    }
</script>

<Layout> sdsds</Layout>
<Label>First Name</Label>
<Input bind:value={foo} />
<Label>Last Name</Label>
<Input bind:value={bar} />
<Button type="button" on:click={getProfile()}>
    Post it.
</Button>
<p>
    Result:
</p>
<pre>
{result}
</pre>