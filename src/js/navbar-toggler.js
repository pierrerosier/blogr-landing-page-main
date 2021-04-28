const $navbarToggler = document.querySelector('#navbarToggler')

    if ($navbarToggler) {
        let navbarOpened = false

        $navbarToggler.addEventListener('click', (evt) => {
            if (navbarOpened) {
                document.getElementById('navbarToggler').classList.remove('is-active')
            } else {
                document.getElementById('navbarToggler').classList.add('is-active')
            }
            navbarOpened = !navbarOpened
        });
    }