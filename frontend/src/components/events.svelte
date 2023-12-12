<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';

    let searchTerm = '';
    let events = [];
    //fetch the events from a get endpoint
    async function getEvents() {
        const res = await fetch('https://elitemma.vercel.app/api/events/getAll', {method: 'GET', headers: {'Content-Type': 'application/json'}})
        let data = await res.json();
        events = data;
        return data;
    }
    getEvents().then((data) => {
        console.log(data);
    });
    $: filteredItems = events.filter((item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
</script>
<Table>
<TableSearch placeholder="Search by event name" hoverable={true} bind:inputValue={searchTerm}>
    <TableHead>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Location</TableHeadCell>
        <TableHeadCell>Date</TableHeadCell>
        <TableHeadCell>Participants</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
        {#each filteredItems as item}
            <TableBodyRow>
                <TableBodyCell>{item.name}</TableBodyCell>
                <TableBodyCell>{item.type}</TableBodyCell>
                <TableBodyCell>{item.location}</TableBodyCell>
                <TableBodyCell>{item.date}</TableBodyCell>
                <TableBodyCell>{item.participants}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</TableSearch>
</Table>
