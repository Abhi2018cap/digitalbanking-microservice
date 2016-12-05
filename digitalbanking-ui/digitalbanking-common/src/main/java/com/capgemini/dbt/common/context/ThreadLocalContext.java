package com.capgemini.dbt.common.context;

/**
 * This class is used to store the user profile and can be fetched in subsequent user requests after logging in
 *
 */
public class ThreadLocalContext {

	public static final ThreadLocal<Context> threadLocal = new ThreadLocal<Context>();

	public static void set(Context context) {
		threadLocal.set(context);
	}

	public static void unset() {
		threadLocal.remove();
	}

	public static Context get() {
		return threadLocal.get();
	}
	
	public class Context {
		//You can put any property here
	}

}
