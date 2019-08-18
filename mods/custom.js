(function()
{
    function toggleToolbar()
    {
        var toolbar = document.getElementsByClassName('toolbar-statusbar')[0];
        var getStatus = toolbar.classList.contains('disabled-item');
        var main = document.getElementById('main');

        if(getStatus)
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

    function toggleSidebarFix()
    {
        document.getElementsByClassName('toolbar-statusbar')[0].firstChild.addEventListener('click', function() {
            var sidebar = document.getElementById('panels-container');
            var getStatus = sidebar.classList.contains('switcher');
            var browserContent = document.getElementById('browserContent');

            if(getStatus)
            {
                browserContent.style.paddingLeft = '0px';
            }
            else
            {
                browserContent.style.paddingLeft = '34px';
            }
        });
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

    function addSidebarIcon()
    {
        var sidebar = document.getElementById('switch');
        var sidebarIcon = document.createElement('button');

        sidebarIcon.setAttribute("id", "sidebarIcon");
        sidebarIcon.style.margin = '0 0 -3px 0';
        sidebarIcon.innerHTML = '<svg style="width: 17px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 10l-16-8-16 8 16 8 16-8zM16 4.655l10.689 5.345-10.689 5.345-10.689-5.345 10.689-5.345zM28.795 14.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398zM28.795 20.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398z"></path></symbol></svg>';
        sidebarIcon.addEventListener('click', () => toggleToolbar(), false);

        sidebar.lastChild.style.marginTop = 0;

        sidebar.insertBefore(sidebarIcon, sidebar.lastChild);
    }

    function toggleSidebarIcon()
    {
        var sidebarIcon = document.getElementById('sidebarIcon');

        if(document.getElementsByClassName('toolbar-statusbar')[0] !== undefined)
        {
            sidebarIcon.classList.remove('disabled-item');
        }
        else
        {
            sidebarIcon.classList.add('disabled-item');
        }
    }

    function moveSidebar()
    {
        var sidebar = document.getElementById('panels-container');
        var sidebarStatus = sidebar.classList.contains('switcher');
        
        var browser = document.getElementById('browser');
        var toolbar = document.getElementsByClassName('toolbar-statusbar')[0];

        var header = document.getElementById('header');
        var main = document.getElementById('main');

        var menu = document.getElementsByClassName('vivaldi')[0];

        menu.style.backgroundColor = '#ececec';
        menu.style.boxShadow = 'inset -1px 0 var(--colorBorder)';

        menu.addEventListener('mouseover', function()
        {
            menu.style.backgroundColor = '#e1e1e1';
        });

        menu.addEventListener('mouseout', function()
        {
            menu.style.backgroundColor = '#ececec';
        });

        var browserContent = document.createElement('div');
        browserContent.id = 'browserContent';
        
        if(sidebarStatus)
        {
            browserContent.style.paddingLeft = '0px';
        }
        else
        {
            browserContent.style.paddingLeft = '34px';
        }

        browserContent.style.height = '100%';
        browserContent.style.width = '100%';

        sidebar.style.height = '100%';
        sidebar.style.position = 'absolute';

        if(toolbar.classList.contains('disabled-item'))
        {
            main.style.height = 'calc(100% - 30px)';
        }
        else
        {
            main.style.height = 'calc(100% - 63px)';
        }

        browserContent.prepend(toolbar);
        browserContent.prepend(main);
        browserContent.prepend(header);
        
        browser.prepend(browserContent);
        browser.prepend(sidebar);

        document.getElementById('panels').prepend(menu);
        document.getElementById('switch').style.marginTop = '32px';
        document.getElementById('tabs-container').style.paddingLeft = '0px';
    }

    function fixNormalPaddingTabs()
    {
        var tabs = document.getElementById('tabs-container');

        tabs.style.paddingTop = '0px';
    }

    function initMod()
    {
        if(!document.querySelector('.vivaldi'))
        {
            setTimeout(initMod, 250);
            return;
        }

        addSeparator();
        addSidebarIcon();
        moveSyncIcons();

        moveSidebar();
        toggleSidebarFix();

        setInterval(function()
        {
            fixNormalPaddingTabs();
            toggleSidebarIcon();
        }, 250);
    }

    initMod();
})();
