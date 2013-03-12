/*
 Copyright (c) 2013 David Sexton <copyright@dbsexton.com>

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * @see http://msdn.microsoft.com/en-us/library/ms525360%28v=vs.90%29.aspx
 * @constructor
 */
function Application() {
}

Application.prototype = {

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524512%28v=vs.90%29.aspx
     * @param key
     */
    Contents: function (key) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525184%28v=vs.90%29.aspx
     */
    Lock: function () {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525487%28v=vs.90%29.aspx
     * @param key
     */
    StaticObjects: function (key) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524320%28v=vs.90%29.aspx
     */
    Unlock: function () {
    }
};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms524942%28v=vs.90%29.aspx
 * @constructor
 */
function ASPError() {
}

ASPError.prototype = {

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525020%28v=vs.90%29.aspx
     * @type {string}
     */
    ASPCode: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524615%28v=vs.90%29.aspx
     * @type {string}
     */
    ASPDescription: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525642%28v=vs.90%29.aspx
     * @type {string}
     */
    Category: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525356%28v=vs.90%29.aspx
     * @type {number}
     */
    Column: 0,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524653%28v=vs.90%29.aspx
     * @type {string}
     */
    Description: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525446%28v=vs.90%29.aspx
     * @type {string}
     */
    File: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524748%28v=vs.90%29.aspx
     * @type {number}
     */
    Line: 0,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525205%28v=vs.90%29.aspx
     * @type {number}
     */
    Number: 0,

    /**
     * http://msdn.microsoft.com/en-us/library/ms525544%28v=vs.90%29.aspx
     * @type {string}
     */
    Source: ""
};


/**
 * @see http://msdn.microsoft.com/en-us/library/ms525667%28v=vs.90%29.aspx
 * @constructor
 */
function ObjectContext() {
}

ObjectContext.prototype = {

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525040%28v=vs.90%29.aspx
     */
    SetAbort: function () {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms526013%28v=vs.90%29.aspx
     */
    SetComplete: function () {
    }
};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms524948%28v=vs.90%29.aspx
 * @constructor
 */
function Request(key) {
}

Request.prototype = {

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525710%28v=vs.90%29.aspx
     * @param count
     */
    BinaryRead: function (count) {
    },

    /**
     * http://msdn.microsoft.com/en-us/library/ms524668%28v=vs.90%29.aspx
     * @param key
     */
    ClientCertificate: function (key) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525394%28v=vs.90%29.aspx
     * @param cookie
     */
    Cookies: function (cookie) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525985%28v=vs.90%29.aspx
     * @param key
     */
    Form: function (key) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524784%28v=vs.90%29.aspx
     * @param key
     */
    QueryString: function (key) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525396%28v=vs.90%29.aspx
     * @param key
     */
    ServerVariables: function (key) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524728%28v=vs.90%29.aspx
     * @type {number}
     */
    TotalBytes: 0
};


/**
 * @see http://msdn.microsoft.com/en-us/library/ms525405%28v=vs.90%29.aspx
 * @constructor
 */
function Response() {
}

Response.prototype = {
    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524327%28v=vs.90%29.aspx
     * @param HeaderName
     * @param HeaderValue
     */
    AddHeader: function (HeaderName, HeaderValue) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524861%28v=vs.90%29.aspx
     * @param string
     */
    AppendToLog: function (string) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524318%28v=vs.90%29.aspx
     * @param data
     */
    BinaryWrite: function (data) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms526001%28v=vs.90%29.aspx
     * @type {boolean}
     */
    Buffer: true,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524721%28v=vs.90%29.aspx
     * @type {string}
     */
    CacheControl: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525304%28v=vs.90%29.aspx
     * @type {string}
     */
    Charset: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525713%28v=vs.90%29.aspx
     */
    Clear: function () {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524628%28v=vs.90%29.aspx
     * @type {number}
     */
    CodePage: 0,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525208%28v=vs.90%29.aspx
     * @type {string}
     */
    ContentType: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524757%28v=vs.90%29.aspx
     * @param cookie
     */
    Cookies: function (cookie) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524629%28v=vs.90%29.aspx
     */
    End: function () {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525906%28v=vs.90%29.aspx
     * @type {number}
     */
    Expires: 0,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms526058%28v=vs.90%29.aspx
     * @type {Date}
     */
    ExpiresAbsolute: new Date(),

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525560%28v=vs.90%29.aspx
     */
    Flush: function () {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525453%28v=vs.90%29.aspx
     * @type {boolean}
     */
    IsClientConnected: true,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524330%28v=vs.90%29.aspx
     * @type {number}
     */
    LCID: 0,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525859%28v=vs.90%29.aspx
     * @type {string}
     */
    PICS: "",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524309%28v=vs.90%29.aspx
     * @param url
     */
    Redirect: function (url) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525844%28v=vs.90%29.aspx
     * @type {string}
     */
    Status: "200 OK",

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525585%28v=vs.90%29.aspx
     * @param variant
     */
    Write: function (variant) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524978%28v=vs.90%29.aspx
     * @param block
     */
    WriteBlock: function (block) {
    }
};


/**
 * @see http://msdn.microsoft.com/en-us/library/ms525541%28v=vs.90%29.aspx
 * @constructor
 */
function Server() {
}

Server.prototype = {

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524786%28v=vs.90%29.aspx
     * @param progId
     */
    CreateObject: function (progId) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525849%28v=vs.90%29.aspx
     * @param path
     */
    Execute: function (path) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524846%28v=vs.90%29.aspx
     * @returns {ASPError}
     */
    GetLastError: function () {
        return new ASPError();
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525347%28v=vs.90%29.aspx
     * @param string
     */
    HTMLEncode: function (string) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524632%28v=vs.90%29.aspx
     * @param path
     */
    MapPath: function (path) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525800%28v=vs.90%29.aspx
     * @param path
     */
    Transfer: function (path) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525738%28v=vs.90%29.aspx
     * @param string
     */
    URLEncode: function (string) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524831%28v=vs.90%29.aspx
     * @type {number}
     */
    ScriptTimeout: 0
};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms524319%28v=vs.90%29.aspx
 * @constructor
 */
function Session() {
}

Session.prototype = {

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524310%28v=vs.90%29.aspx
     */
    Abandon: function () {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525093%28v=vs.90%29.aspx
     */
    Contents: function (key) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525649%28v=vs.90%29.aspx
     * @type {number}
     */
    CodePage: 0,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525071%28v=vs.90%29.aspx
     * @type {number}
     */
    LCID: 0,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms524326%28v=vs.90%29.aspx
     * @type {number}
     */
    SessionID: 0,

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525479%28v=vs.90%29.aspx
     */
    StaticObjects: function (key) {
    },

    /**
     * @see http://msdn.microsoft.com/en-us/library/ms525473%28v=vs.90%29.aspx
     * @type {number}
     */
    Timeout: 0
};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms524716%28v=vs.90%29.aspx
 * @constructor
 */
var ScriptingContext = {
    /**
     * @type {Application}
     */
    Application: Application,

    /**
     * @type {ObjectContext}
     */
    ObjectContext: ObjectContext,

    /**
     * @type {Request}
     */
    Request: Request,

    /**
     * @type {Response}
     */
    Response: Response,

    /**
     * @type {Server}
     */
    Server: Server,

    /**
     * @type {Session}
     */
    Session: Session
}
