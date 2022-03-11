package com.mycompany.myapp4;

import android.app.*;
import android.os.*;
import android.webkit.*;

public class MainActivity extends Activity 
{
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
		ActionBar bar = getActionBar();
		bar.hide();
		
		WebView webview = (WebView)findViewById(R.id.webview);
		
		WebSettings settings = webview.getSettings();
		
		settings.setJavaScriptEnabled(true);
		webview.setWebViewClient(new WebViewClient());
		webview.setWebChromeClient(new WebChromeClient());
		webview.loadUrl("file:///android_asset/index.html");
		
    }
}
