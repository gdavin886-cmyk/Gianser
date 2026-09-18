package com.gianser.browser;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/** Hosts the packaged Gianser interface and lets its address form open web pages. */
public final class MainActivity extends Activity {
    private WebView browser;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        browser = new WebView(this);
        browser.setBackgroundColor(Color.TRANSPARENT);
        browser.getSettings().setJavaScriptEnabled(true);
        browser.getSettings().setDomStorageEnabled(true);
        browser.getSettings().setMediaPlaybackRequiresUserGesture(false);
        browser.setWebChromeClient(new WebChromeClient());
        browser.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return false;
            }
        });
        setContentView(browser);
        if (savedInstanceState == null) {
            browser.loadUrl("file:///android_asset/index.html");
        } else {
            browser.restoreState(savedInstanceState);
        }
    }

    @Override
    public void onBackPressed() {
        if (browser.canGoBack()) {
            browser.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        browser.saveState(outState);
        super.onSaveInstanceState(outState);
    }
}
