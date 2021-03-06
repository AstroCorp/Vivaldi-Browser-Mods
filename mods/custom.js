(function()
{
    function toggleToolbar()
    {
        var toolbar = document.getElementsByClassName('toolbar-statusbar')[0];
        var getStatus = toolbar.classList.contains('disabled-item');
        var main = document.getElementById('main');

        if (getStatus)
        {
            toolbar.classList.remove('disabled-item');
            main.style.height = 'calc(100% - 63px)';
        }
        else
        {
            toolbar.classList.add('disabled-item');
            main.style.height = 'calc(100% - 30px)';
        }
    }

    function addSeparator()
    {
        var sidebar = document.getElementById('switch');
        var separator = document.createElement('div');

        separator.style.marginTop = 'auto';
        separator.style.width = '1px';

        sidebar.lastChild.style.marginTop = 0;

        sidebar.insertBefore(separator, sidebar.lastChild);
    }

    function moveSyncIcons()
    {
        var sidebar = document.getElementById('switch');
        var syncIcons = document.querySelector('.sync-and-trash-container');

        sidebar.insertBefore(syncIcons, sidebar.lastChild);
    }

    function addToggleStatusBarIcon()
    {
        var sidebar = document.getElementById('switch');
        var toggleStatusBarIcon = document.createElement('button');

        toggleStatusBarIcon.setAttribute("id", "toggleStatusBarIcon");
        toggleStatusBarIcon.style.margin = '0 0 -3px 0';
        toggleStatusBarIcon.innerHTML = '<svg style="width: 17px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 10l-16-8-16 8 16 8 16-8zM16 4.655l10.689 5.345-10.689 5.345-10.689-5.345 10.689-5.345zM28.795 14.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398zM28.795 20.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398z"></path></symbol></svg>';
        toggleStatusBarIcon.addEventListener('click', () => toggleToolbar(), false);

        sidebar.lastChild.style.marginTop = 0;

        sidebar.insertBefore(toggleStatusBarIcon, sidebar.lastChild);
    }

    function setToggleStatusBarIconStatus()
    {
        var toggleStatusBarIcon = document.getElementById('toggleStatusBarIcon');

        if (document.getElementsByClassName('toolbar-statusbar')[0] !== undefined)
        {
            toggleStatusBarIcon.classList.remove('disabled-item');
        }
        else
        {
            toggleStatusBarIcon.classList.add('disabled-item');
        }
    }

    function applySidebarMods()
    {
        addSeparator();
        addToggleStatusBarIcon();
        moveSyncIcons();
    }

    function initMod()
    {
        if (!document.querySelector('.vivaldi'))
        {
            setTimeout(initMod, 200);
            return;
        }

        applySidebarMods();

        setInterval(function()
        {
            setToggleStatusBarIconStatus();
        }, 20);
    }

    initMod();
})();
