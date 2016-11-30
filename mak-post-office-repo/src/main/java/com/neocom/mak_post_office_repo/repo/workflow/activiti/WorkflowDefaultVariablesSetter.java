package com.neocom.mak_post_office_repo.repo.workflow.activiti;

import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.delegate.ExecutionListener;

import com.alvexcore.repo.workflow.activiti.AlvexActivitiListener;

@SuppressWarnings("serial")
public class WorkflowDefaultVariablesSetter extends AlvexActivitiListener implements ExecutionListener {
	
	final public static String VARIABLE_SEND_EMAIL_NOTIFICATIONS = "bpm_sendEMailNotifications";

	public void notify(DelegateExecution execution) throws Exception {
		execution.setVariable(VARIABLE_SEND_EMAIL_NOTIFICATIONS, true);
	}

}
