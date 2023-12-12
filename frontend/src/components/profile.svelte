<script>
    import {Input, Button, Label, Layout} from 'flowbite-svelte';
    export let email;

    let name = null
    let address = null
    let password = null

    if(email != null){
        getProfile(email)
    }

    async function getProfile (email) {
        const res = await fetch('https://codecombos.vercel.app/api/sendusers?email='+ email +'/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json()

        name = data.name
        address = data.address
        password = data.password
    }
    async function onSubmit(email, password, name, address) {
        const database = await fetch('/api/users/'+ email, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Email": email,
                "Name": name,
                "Address": address,
                "Password": password
            })
        })
        const data = await database.json()

        // update the login username and password
        await updateLogin(email, password)
    }

    async function updateLogin(email, password) {
        await fetch('/api/auth/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Email": email,
                "Password": password
            })
        })
    }

</script>

<Layout>
    <form on:submit|preventDefault={onSubmit(email, password, name, address)}>
    <Label>Email</Label>
    <Input type="text" bind:value={email} />
    <Label>Password</Label>
    <Input type="text" bind:value={password} />
    <Label>Full Name</Label>
    <Input type="text" bind:value={name} />
    <Label>Address</Label>
    <Input bind:value={address} />
<Button type="submit">
    Submit Changes
</Button>
        </form>
</Layout>