<script>
    import { Navbar, NavBrand, NavLi, NavUl, Button} from 'flowbite-svelte';
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
    </NavUl>
    <Button href="/login" class1="hidden md:block md:order-3" color="primary" size="sm">Sign in</Button>

</Navbar>
