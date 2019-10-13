const { app, BrowserWindow } = require('electron')
import * as fs from "fs"
import { JiraUrl } from "./jira.url";


function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({ width: 1400, height: 1000, backgroundColor: '#333', center: true, titleBarStyle: "customButtonsOnHover", frame: false, thickFrame: true })
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
    // and load the index.html of the app.
    mainWindow.loadURL(JiraUrl)
    mainWindow.webContents.on('did-finish-load', function () {
        // fs.readFile(__dirname + "/jira.extreme.dark.css", "utf-8", function (error: any, data: any) {
        fs.readFile(__dirname + "/jira.full.dark.css", "utf-8", function (error: any, data: any) {
            console.log('data', data)
            console.log('error', error)
            if (!error) {
                var formatedData = data.replace(/\s{2,10}/g, ' ').trim()
                mainWindow.webContents.insertCSS(formatedData)
                mainWindow.webContents.executeJavaScript('console.log("test")')
            }
        })
    });
    // mainWindow.webContents.openDevTools()

}
app.on('ready', createWindow)
