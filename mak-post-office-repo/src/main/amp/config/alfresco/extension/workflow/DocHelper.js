function addPermissionToUser(user, role, documents,initiator){
	for(var i = 0; i < documents.children.length; i++) {
		var resource = documents.children[i];
		if(!resource.getSiteShortName()){
			resource.setPermission(role,user);
			resource.setPermission(role,initiator);
		}	
	 	else 
	 	{
			var siteName = resource.getSiteShortName();
			var site = siteService.getSite(siteName);
			if(!site.isMember(user) || !site.isMember(initiator)){
				resource.setPermission(role,user);
				resource.setPermission(role,initiator);
			}
		}
	}
	
}