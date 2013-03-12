(function(){
    var session;
    var server;
    var response;
    var request;
    var objectContext;
    var application;
    var aspError;
    var result;

    //noinspection ConstantIfStatementJS
    if(false){
        //Application Members
        application = Application;
        result = application.Contents('test');
        application.Lock();
        result = application.StaticObjects('test');
        application.Unlock();

        //ASPError Members
        aspError = Server.GetLastError();
        result = aspError.ASPCode;
        result = aspError.ASPDescription;
        result = aspError.Category;
        result = aspError.Column;
        result = aspError.Description;
        result = aspError.File;
        result = aspError.Line;
        result = aspError.Number;
        result = aspError.Source;

        //ObjectContext Members
        objectContext = ObjectContext;
        objectContext.SetAbort();
        objectContext.SetComplete();

        //Request Members
        request = Request;
        result = request.BinaryRead(1);
        result = request.ClientCertificate("test");
        result = request.Cookies("cookie1");
        result = request.Form("id");
        result = request.QueryString("id");
        result = request.ServerVariables("HTTP_METHOD");
        result = request.TotalBytes;

        //Response Members
        response = Response;
        response.AddHeader("x-my-header", "value");
        response.AppendToLog("Success");
        response.BinaryWrite("This is not the correct input type");
        result = response.Buffer;
        result = response.CacheControl;
        result = response.Charset;
        response.Clear();
        result = response.CodePage;
        result = response.ContentType;
        result = response.Cookies("cookie1");
        response.End();
        result = response.Expires;
        result = response.ExpiresAbsolute;
        response.Flush();
        result = response.IsClientConnected;
        result = response.LCID;
        result = response.PICS;
        response.Redirect("/");
        result = response.Status;
        result = response.Write("Hello world");
        result = response.WriteBlock(1);
        
        //Server Members
        server = Server;
        result = server.CreateObject("adodb.connection");
        server.Execute("DoesNotExist.asp");
        //server.GetLastError(); //Tested above
        result = server.HTMLEncode("test");
        result = server.MapPath("/");
        server.ScriptTimeout = 0;
        server.Transfer("DoesNotExist.asp");
        result = server.URLEncode("test");

        //Session Members
        session = Session;
        session.Abandon();
        result = session.CodePage;
        result = session.Contents("key");
        result = session.LCID;
        result = session.SessionID;
        result = session.StaticObjects("key");
        result = session.Timeout;

        //ScriptingContext Members
        result = ScriptingContext.Application;
        result = ScriptingContext.ObjectContext;
        result = ScriptingContext.Request;
        result = ScriptingContext.Response;
        result = ScriptingContext.Server;
        result = ScriptingContext.Session;
    }
    Response.ContentType = "text/plain";
    Response.Write("done");
})();
