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

    function addLinkToChromeAppsInSpeedDial()
    {
        var speedDialLinks = document.querySelector(".startpage-navigation .startpage-navigation-group:nth-child(2)");

        if(document.querySelector("#btn-apps-vivaldi") || !speedDialLinks)
        {
            return;
        }

        var appsButton = document.createElement("BUTTON");

        appsButton.id = "btn-apps-vivaldi";
        appsButton.addEventListener("click", () => chrome.tabs.update({"url":"vivaldi://apps"}));
        appsButton.setAttribute("class", "button-startpage no-page-focus apps-chrome-icon");
        appsButton.setAttribute("title", "Apps");
        appsButton.setAttribute("data-id", "apps");
        appsButton.setAttribute("tabindex", "-1");
        appsButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><path d="M6.375,6.91667A.50748.50748,0,0,1,6.83929,6.375H9.16071a.50748.50748,0,0,1,.46429.54167V9.08333a.50748.50748,0,0,1-.46429.54167H6.83929A.50748.50748,0,0,1,6.375,9.08333Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/><path d="M1.5,6.91667A.50748.50748,0,0,1,1.96429,6.375H4.28571A.50748.50748,0,0,1,4.75,6.91667V9.08333a.50748.50748,0,0,1-.46429.54167H1.96429A.50748.50748,0,0,1,1.5,9.08333Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/><path d="M11.25,6.91667a.50748.50748,0,0,1,.46429-.54167h2.32142A.50748.50748,0,0,1,14.5,6.91667V9.08333a.50748.50748,0,0,1-.46429.54167H11.71429A.50748.50748,0,0,1,11.25,9.08333Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/><path d="M6.375,11.79167A.50748.50748,0,0,1,6.83929,11.25H9.16071a.50748.50748,0,0,1,.46429.54167v2.16666A.50748.50748,0,0,1,9.16071,14.5H6.83929a.50748.50748,0,0,1-.46429-.54167Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/><path d="M1.5,11.79167A.50748.50748,0,0,1,1.96429,11.25H4.28571a.50748.50748,0,0,1,.46429.54167v2.16666A.50748.50748,0,0,1,4.28571,14.5H1.96429A.50748.50748,0,0,1,1.5,13.95833Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/><path d="M11.25,11.79167a.50748.50748,0,0,1,.46429-.54167h2.32142a.50748.50748,0,0,1,.46429.54167v2.16666a.50748.50748,0,0,1-.46429.54167H11.71429a.50748.50748,0,0,1-.46429-.54167Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/><path d="M6.375,2.04167A.50748.50748,0,0,1,6.83929,1.5H9.16071a.50748.50748,0,0,1,.46429.54167V4.20833A.50748.50748,0,0,1,9.16071,4.75H6.83929A.50748.50748,0,0,1,6.375,4.20833Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/><path d="M1.5,2.04167A.50748.50748,0,0,1,1.96429,1.5H4.28571A.50748.50748,0,0,1,4.75,2.04167V4.20833A.50748.50748,0,0,1,4.28571,4.75H1.96429A.50748.50748,0,0,1,1.5,4.20833Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/><path d="M11.25,2.04167A.50748.50748,0,0,1,11.71429,1.5h2.32142A.50748.50748,0,0,1,14.5,2.04167V4.20833a.50748.50748,0,0,1-.46429.54167H11.71429A.50748.50748,0,0,1,11.25,4.20833Z" transform="translate(-1.5 -1.5)" style="fill-rule:evenodd"/></svg>
            Apps
        `;

        speedDialLinks.appendChild(appsButton);
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
            addLinkToChromeAppsInSpeedDial();
        }, 20);
    }

    initMod();
})();
