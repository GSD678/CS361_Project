<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import {get} from "svelte/store";

    let searchTerm = '';
    let items = [
        {
            id: 1,
            name: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            location: 'Lorem ipsum dolor sit amet',
            date: 'Lorem ipsum dolor sit amet',
            participants: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 2,
            name: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            location: 'Lorem ipsum dolor sit amet',
            date: 'Lorem ipsum dolor sit amet',
            participants: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 3,
            name: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            location: 'Lorem ipsum dolor sit amet',
            date: 'Lorem ipsum dolor sit amet',
            participants: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 4,
            name: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            location: 'Lorem ipsum dolor sit amet',
            date: 'Lorem ipsum dolor sit amet',
            participants: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 5,
            name: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            location: 'Lorem ipsum dolor sit amet',
            date: 'Lorem ipsum dolor sit amet',
            participants: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 6,
            name: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            location: 'Lorem ipsum dolor sit amet',
            date: 'Lorem ipsum dolor sit amet',
            participants: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            name: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            location: 'Lorem ipsum dolor sit amet',
            date: 'Lorem ipsum dolor sit amet',
            participants: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 8,
            name: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            location: 'Lorem ipsum dolor sit amet',
            date: 'Lorem ipsum dolor sit amet',
            participants: 'Lorem ipsum dolor sit amet',
        },

    ];
    let events = [];
    //fetch the events from a get endpoint
    async function getEvents() {
        const res = await fetch('https://codecombos.vercel.app/api/events/getAll', {method: 'GET', headers: {'Content-Type': 'application/json'}})
        const json = await res.json();
        let data = json;
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
