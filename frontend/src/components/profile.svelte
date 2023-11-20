<script>
    import {Input, Button, Label, Layout} from 'flowbite-svelte';

    let foo = 'baz'
    let bar = 'qux'
    let result = null

    async function doPost () {
        const res = await fetch('https://httpbin.org/post', {
            method: 'POST',
            body: JSON.stringify({
                foo,
                bar
            })
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
<Button type="button" on:click={doPost}>
    Post it.
</Button>
<p>
    Result:
</p>
<pre>
{result}
</pre>