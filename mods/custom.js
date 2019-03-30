(function()
{
    function toggleStatusbar()
    {
        var statusbar = document.getElementsByClassName('toolbar-statusbar')[0];
        var getStatus = statusbar.classList.contains('disabled-item');

        if(getStatus)
        {
            statusbar.classList.remove('disabled-item');
        }
        else
        {
            statusbar.classList.add('disabled-item');
        }

        console.log('check');
    }

    function moveSyncIcons()
    {
        var sidebar = document.getElementById('switch');
        var syncIcons = document.querySelector('.sync-and-trash-container');

        sidebar.insertBefore(syncIcons, sidebar.lastChild);
    }

    function addSidebarIcon()
    {
        var sidebar = document.getElementById('switch');
        var sidebarIcon = document.createElement('button');

        sidebarIcon.style.margin = 'auto 0 -3px 0';
        sidebarIcon.innerHTML = '<svg style="width: 17px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 10l-16-8-16 8 16 8 16-8zM16 4.655l10.689 5.345-10.689 5.345-10.689-5.345 10.689-5.345zM28.795 14.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398zM28.795 20.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398z"></path></symbol></svg>';
        sidebarIcon.addEventListener('click', () => toggleStatusbar());

        sidebar.lastChild.style.marginTop = 0;

        sidebar.insertBefore(sidebarIcon, sidebar.lastChild);
    }

    function initMod()
    {
        if(!document.getElementById('browser'))
        {
            setTimeout(initMod, 300);
            return;
        }

        addSidebarIcon();
        moveSyncIcons();
    }

    initMod();
})();
