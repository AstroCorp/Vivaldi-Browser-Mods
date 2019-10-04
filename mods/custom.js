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

    function welcomePage()
    {
        var startPage = document.querySelector('.startpage');

        if(document.getElementById('welcome'))
        {
            if(!startPage)
            {
                document.getElementById('welcome').remove();
            }

            return;
        }

        var welcomePage = document.createElement('DIV');

        welcomePage.id = 'welcome';

        welcomePage.innerHTML = `
            <div class='welcome-text'>
                <h1>¡Hola Alejandro!</h1>
                <h4>Te deseamos un buen día</h4>
                <button class='btn-closeWelcome'>Ver accesos directos</button>
            </div>
        `;

        startPage.parentNode.appendChild(welcomePage);

        document.querySelector('.btn-closeWelcome').addEventListener('click', function() 
        {
            document.getElementById('welcome').style.display = 'none';
            document.querySelector('.startpage').style.display = 'flex';
        });
    }

    function initMod()
    {
        if(!document.querySelector('.vivaldi'))
        {
            setTimeout(initMod, 200);
            return;
        }

        addSeparator();
        addSidebarIcon();
        moveSyncIcons();

        setInterval(function()
        {
            toggleSidebarIcon();
            // welcomePage();
        }, 20);
    }

    initMod();
})();
