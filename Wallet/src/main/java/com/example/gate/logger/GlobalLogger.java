package com.example.gate.logger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class GlobalLogger {

public static Logger getLogger(Class className) {
		
		return LoggerFactory.getLogger(className);
	}
}
