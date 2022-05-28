<aura:component>
    <ui:inputEmail aura:id="email" label="Email" class="field" value="manager@email.com"/>  
    <ui:button class="btn" label="Submit" press="{!c.setOutput}"/>	

	<div aura:id="msg" class="hide">
	    You entered: <ui:outputEmail aura:id="oEmail" value="Email" />
	</div>

</aura:component>