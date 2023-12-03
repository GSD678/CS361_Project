<script>
    import { Navbar, NavBrand, NavLi, NavUl, Button} from 'flowbite-svelte';
    import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-svelte';
</script>

<Navbar>
    <NavBrand href="/">
        <img src="/Logo.jpeg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MMA</span>
    </NavBrand>
    <NavUl>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/schedule">Schedule</NavLi>
        <NavLi href="/contact">Contact</NavLi>
        <NavLi href="/account">Account</NavLi>
    </NavUl>
    <Avatar id="user-drop" src="defaultProfile.png" class="cursor-pointer" />
    <Dropdown triggeredBy="#user-drop">
        <DropdownItem href="/api/auth/signout">Sign out</DropdownItem>
    </Dropdown>
</Navbar>
