/*
 * Copyright 2015 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de', {"(In reply to {{personName}})":"(Antwort auf {{personName}})","(More info)":"(Weitere Informationen)","* All fields are mandatory.":"* Alle Felder sind erforderlich.","* marked fields are mandatory fields.":"mit * gekennzeichnete Felder sind erforderlich.","24x7 Contact":"Rund-um-die-Uhr Kontakt","24x7 Coverage":"Rund-um-die-Uhr Betreuung","24x7 Support":"Rund-um-die-Uhr Support","Account":"Account","Account Information":"Accountinformationen","Account Name":"Accountname","Account Notes":"Accountnotizen","Account not found.":"Account nicht gefunden.","Active":"Aktiv","Add":"Hinzufügen","Adding user {{userName}} to case.":"Benutzer {{userName}} wird zu Ticket hinzugefügt.","All Attachments":"Alle Anhänge","All Groups":"Alle Gruppen","Already Escalated?":"Bereits eskaliert?","Alternate Case ID":"Alternative Ticket-ID","Are you sure you want to change this case severity to {{severityName}}?":"Sind Sie sicher, dass Sie den Schweregrad dieses Tickets auf {{severityName}} ändern möchten?","Are you sure you want to change this case status to {{statusName}}?":"Sind Sie sicher, dass Sie den Status dieses Tickets auf {{statusName}} ändern möchten?","Are you sure you want to close the selected cases?":"Sind Sie sicher, dass Sie die ausgewählten Tickets schließen möchten?","Assigned to":"Zugewiesen zu","Attach Another File":"Weitere Datei anhängen","Attach File":"Datei anhängen","Attach Foreman logs:":"Foreman-Protokolle anhängen:","Attached":"Angehängt","Attached By":"Angehängt durch","Attached Files":"Angehängte Dateien","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"Das Anhängen von Protokollen und Diagnosedateien beschleunigt die Problemlösung enorm. Möchten Sie fortfahren, ohne Dateien anzuhängen?","Attaching logs or other diagnostics files typically results in faster resolution.":"Das Anhängen von Protokollen und anderen Diagnosedateien beschleunigt in der Regel die Problemlösung.","Available Log Files":"Verfügbare Protokolldateien","BACK":"ZURÜCK","BREACH":"ÜBERSCHREITUNG","Back":"Zurück","Based on your description, here are some possible solutions":"Basierend auf Ihrer Beschreibung sehen Sie hier einige mögliche Lösungen","Breached by {{breachTime}}":"Überschreitung {{breachTime}}","Breaching in {{breachTime}}":"Überschreitung in {{breachTime}}","Bugzilla Number":"Bugzilla-Nummer","Bugzilla Tickets":"Bugzilla-Tickets","Bugzillas":"Bugzillas","Business Hours":"Geschäftszeiten","CASE {{CaseService.kase.case_number}}":"TICKET {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"TICKET {{caseNumber}}","CREATE A NEW SUPPORT CASE":"NEUES SUPPORT-TICKET ERSTELLEN","Cancel":"Abbrechen","Case  {{caseNumber}} successfully closed.":"Ticket {{caseNumber}} erfolgreich geschlossen.","Case Bugzillas":"Ticket-Bugzillas","Case Description":"Ticketbeschreibung","Case Detail":"Ticketdetails","Case Discussion":"Ticketdiskussion","Case Escalations":"Ticket-Eskalationen","Case Group":"Ticketgruppe","Case Group (Optional)":"Ticketgruppe (Optional)","Case Group Name:":"Ticketgruppenname:","Case Group:":"Ticketgruppe:","Case History":"Ticketverlauf","Case Information":"Ticketinformationen","Case Name":"Ticketname","Case Overview":"Ticketübersicht","Case Owner (A-Z)":"Ticketbesitzer (A-Z)","Case Owner (Z-A)":"Ticketbesitzer (Z-A)","Case Resolution":"Ticketlösung","Case Summary":"Ticketzusammenfassung","Case Type":"Tickettyp","Case group successfully updated.":"Ticket-Gruppe wurde erfolgreich aktualisiert.","Case severity was changed.":"Der Schweregrad des Tickets wurde geändert.","Case status was changed.":"Der Status des Tickets wurde geändert.","Case users successfully updated.":"Ticket-Benutzer wurden erfolgreich aktualisiert.","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"Ticket {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"Ticket {{caseNumber}} erfolgreich geschlossen.","Chat Offline":"Offline chatten","Chat with Support":"Mit Support-Team chatten","Choose File(s) To Attach:":"Wählen Sie die anzuhängenden Dateien:","Close":"Schließen","Close Case":"Ticket schließen","Close messages":"Nachrichten schließen","Closed":"Geschlossen","Closed Support Cases":"Geschlossene Support-Tickets","Closing Cases.":"Tickets schließen.","Closing cases.":"Tickets schließen.","Comment:":"Kommentar:","Create Case Group":"Ticketgruppe erstellen","Create New Case Group":"Neue Ticketgruppe erstellen","Create a New Support Case":"Neues Support-Ticket erstellen","Created By":"Erstellt durch","Created by {{case.created_by}} on {{case.created_date}}":"Erstellt durch {{case.created_by}} am {{case.created_date}}","Creating Ice Escalation request .....":"ICE-Eskalationsanfrage wird erstellt …","Creating Partner Escalation request .....":"Partner-Eskalationsanfrage wird erstellt …","Creating case...":"Ticket wird erstellt …","Creating group {{groupName}}...":"Gruppe {{groupName}} wird erstellt …","Customer":"Kunde","Customer Account Number":"Accountnummer des Kunden","Customer Contact Email":"E-Mail-Adresse des Kunden","Customer Contact Name":"Ansprechpartner beim Kunden","Customer Contact Number":"Telefonnummer des Kunden","Customer GEO":"Region des Kunden","Delete":"Löschen","Delete Group":"Gruppe löschen","Deleting attachment: {{attachmentName}}":"Anhang löschen: {{attachmentName}}","Description":"Beschreibung","Diagnose":"Diagnose","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"Abhängig von Ihren Account-Subskriptionen sind ggf. verschiedene Support-Level-Optionen verfügbar. Die Art der zu erwartenden Antwort auf Ihr Support-Ticket hängt von Ihrem Support-Level ab.","Discard Changes":"Änderungen verwerfen","Discussion":"Diskussion","Edit":"Bearbeiten","Email address is incorrect":"E-Mail-Adresse ist falsch","Entitlement Information":"Berechtigungsinformationen","Environment":"Umgebung","Error: Failed to upload attachment.":"Fehler: Anhang konnte nicht hochgeladen werden.","Error: Failed to upload attachment. Message: {{errorMessage}}":"Fehler: Anhang konnte nicht hochgeladen werden. Nachricht: {{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"Fehler: Anhang konnte nicht hochgeladen werden. Nachricht: {{errorMessage}}","Escalations":"Eskalationen","Expectation":"Erwartungen","Export":"Export","Export as CSV":"Als CSV exportieren","Exporting CSV...":"CSV wird exportiert...","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"Anhang {{attachmentName}} konnte nicht zum Ticket {{caseNumber}} hochgeladen werden: {{errorMessage}}","File description":"Dateibeschreibung","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"Dateinamen sind auf 80 Zeichen beschränkt. Maximale Dateigröße für Anhänge zum Web-Upload ist 1 GB. Für größere Dateien bitte FTP verwenden (dropbox.redhat.com).","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"Eingereicht am {{CaseService.kase.created_date}} durch {{CaseService.kase.contact_name}}","Filename":"Dateiname","Find My Account Number":"Meine Account-Nummer suchen","First Name":"Vorname","For example: 1-888-467-3342":"Zum Beispiel: +49-80-12345678","Friday End Time:":"Freitag Endzeit:","Friday Start Time:":"Freitag Startzeit:","GSS ICE FAQ":"GSS ICE FAQs","GSS ICE Form":"GSS ICE Formular","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"GSS arbeitet derzeit daran, den ICE-Vorgang mithilfe von E-Mails zu verbessern. Wir werden Sie hier über die Fortschritte auf dem Laufenden halten.","Get faster results.":"Erzielen Sie schneller Ergebnisse.","Group Name:":"Gruppenname:","Group Users:":"Gruppenbenutzer:","Handpicked For You":"Handverlesen für Sie","Highest Severity":"Höchster Schweregrad","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"Falls dieses Formular nicht wie erwartet funktioniert, reichen Sie bitte ein Ticket über helpdesk@redhat.com ein, in dem Sie das Problem mit dem GSS-Ticketsystem und dem ICE-Formular melden","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"Falls dies eine Informationsanforderung von Ihnen oder dem Kunden ist und falls Sie möchten, dass wir uns mit Ihnen in Verbindung setzen, um das Problem zu besprechen.","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"Falls Sie eine Account-Prüfung anfordern, falls dies in Zusammenhang mit einem bestimmten Problem/Ticket oder einer Reihe von Problemen/Tickets steht oder falls dies eine allgemeine Beschwerde ist","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"Wenn Sie der Annahme sind, dass Sie die Berechtigung zum Anzeigen dieser Inhalte haben sollten, setzen Sie sich bitte <a href=\"/support/contact/customerService.html\"> mit unserem Kundenservice</a> in Verbindung. Ihr Red Hat Login ist möglicherweise nicht dem Account Ihres Unternehmens zugeordnet oder es besteht ein Problem mit Ihrer Subskription. In jedem Fall wird Ihnen der Kundenservice helfen, das Problem zu lösen.","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"Wenn das Problem schwerwiegender ist oder dem Ticket eine höhere Priorität zugeordnet werden soll, fügen Sie bitte einen ausführlichen Kommentar hinzu. Das Ticket wird anschließend von einem Support-Manager überprüft.","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"Falls Sie dennoch ein Support-Ticket einreichen möchten, klicken Sie auf \"Neues Support-Ticket erstellen\". In das Ticket werden Informationen aus dem Protokoll eingefügt, das Sie zuvor ausgewählt haben.","Internal Priority":"Interne Priorität","Internal Status":"Interner Status","Is Public:":"Ist öffentlich:","Issue Description":"Problembeschreibung","Last Modified By":"Zuletzt verändert durch","Last Name":"Nachname","Last Updated By":"Zuletzt aktualisiert durch","Learn More":"Weitere Informationen","Learn more":"Mehr dazu","Life of Case":"Ticketlaufzeit","Loading cases...":"Tickets werden geladen …","Locating top solutions":"Beste Lösungen werden gesucht","Log File Viewer":"Protokollbetrachter","Log In":"Anmelden","Log Out":"Abmelden","Logged into the Red Hat Customer Portal as":"Beim Red Hat Kundenportal angemeldet als","Logs":"Protokolle","Lowest Severity":"Niedrigster Schweregrad","MISSING SBT. Entitlement status: {{entitlementStatus}}":"SBT fehlt. Berechtigungsstatus: {{entitlementStatus}}","Manage Case Groups":"Ticketgruppen verwalten","Manage Default Case Groups":"Standard-Ticketgruppen verwalten","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"Verändert durch {{case.last_modified_by}} am {{case.last_modified_date}}","Monday End Time:":"Montag Endzeit:","Monday Start Time:":"Montag Startzeit:","My Cases":"Meine Tickets","N/A":"Entfällt","NEXT":"WEITER","NONE":"KEIN","NOT BREACHED":"KEINE ÜBERSCHREITUNG","Name":"Name","Need to raise a concern to Red Hat Support management?":"Haben Sie ein Anliegen für das Red Hat Support-Management?","Negotiated Entitlement Process":"Verhandelter Berechtigungsvorgang","Newest Date Created":"Neuestes Erstellungsdatum","Newest Date Modified":"Neuestes Änderungsdatum","Newest to Oldest":"Neueste zuerst","No":"Nein","No Files were attached to your case.":"Ihrem Ticket wurden keine Dateien angehängt.","No attachments added":"Keine Anhänge hinzugefügt","No cases found with given filters.":"Keine Tickets gefunden mit diesen Filtern.","No cases found.":"Keine Tickets gefunden.","No groups found.":"Keine Gruppen gefunden.","No linked bugzillas":"Keine verlinkten Bugzillas","No match found":"Keine Übereinstimmung gefunden","No solutions found.":"Keine Lösungen gefunden.","No url roles or user roles found.":"Keine URL-Rollen oder Benutzerrollen gefunden.","No, Go Back":"Nein, zurückgehen","Not Found":"Nicht gefunden","Not Logged into the Red Hat Customer Portal":"Nicht beim Red Hat Kundenportal angemeldet","Note:":"Hinweis:","Notes:":"Hinweise:","Number of Open Cases":"Anzahl offener Tickets","Oldest Date Created":"Ältestes Erstellungsdatum","Oldest Date Modified":"Ältestes Änderungsdatum","Oldest to Newest":"Älteste zuerst","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"Sobald die Anfrage eingereicht wurde, wird ein ICE-Ticket im GSS-Ticket-Managementsystem erstellt und dem GSS-Managementteam vorgelegt.","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"Nachdem Sie Ihre Protokolldatei ausgewählt haben, können Sie einen beliebigen Teil dieser Protokolldatei untersuchen, indem Sie auf die Schaltfläche \"Red Hat Diagnose\" klicken. Daraufhin werden die relevanten Artikel und Lösungen aus der Red Hat Knowledgebase angezeigt.","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"Sobald Sie Ihre Anfrage eingereicht haben, wird ein Partner-Eskalationsticket bei GSS geöffnet und das GSS-Managementteam benachrichtigt. Sie erhalten daraufhin eine E-Mail an die unten angegebene E-Mail-Adresse mit der Ticketnummer für die Partner-Eskalation sowie weiteren Information darüber, wie Sie den Fortschritt nachverfolgen können.","Open":"Öffnen","Open New Case":"Neues Ticket erstellen","Open Support Cases":"Offene Support-Tickets","Open a New Support Case":"Neues Support-Ticket erstellen","Open and Closed":"Offen und abgeschlossen","Open and Closed Support Cases":"Offene und geschlossene Support-Tickets","Owned by {{case.contact_name}}":"Besitzer: {{case.contact_name}}","Owner":"Besitzer","Owner Information":"Besitzerinformationen","Password":"Passwort","Please":"Bitte","Please Add File Description":"Bitte fügen Sie eine Beschreibung der Datei hinzu","Please Select the Machine":"Bitte wählen Sie den Rechner","Please check the requestor email address":"Bitte prüfen Sie die E-Mail-Adresse des Anfragers","Please note, contents of this field are not visible to Red Hat Support professionals.":"Bitte beachten Sie, dass der Inhalt dieses Felds für die Support-Mitarbeiter von Red Hat nicht einsehbar ist.","Please provide as much detail as possible to help us understand the issue, for example:":"Bitte geben Sie so viele Details wie möglich an, damit wir das Problem besser verstehen, zum Beispiel:","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"Bitte geben Sie so viele Details wie möglich an, damit wir das Problem besser verstehen, zum Beispiel: Grund für die Eskalation, Geschäftskontext, Wettbewerbssituation, Support-Erfahrung in der Vergangenheit","Please provide as much information as possible in the form.":"Bitte geben Sie im Formular so viele Informationen wie möglich an.","Please provide as much information/detail as possible in the form.":"Bitte geben Sie im Formular so viele Informationen und Details wie möglich an.","Please provide expectations and desired outcomes from yourself and from the customer":"Bitte geben Sie die gewünschten Ergebnisse und Erwartungen von Ihnen und Ihrem Kunden an","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"Bitte fragen Sie wenn möglich nach der Accountnummer des Kunden; verwenden Sie andernfalls Ihre Red Hat Accountnummer. Sie finden die Accountnummer, indem Sie auf den Benutzernamen oben rechts auf dieser Seite klicken.","Post":"Posten","Priority Customer Support Routing":"Support-Verfahren für Kunden hoher Priorität","Private":"Privat","Private Notes":"Private Notizen","Product":"Produkt","Product Version":"Produktversion","Production Support Service Level Agreement":"Service-Level-Vereinbarung Produktions-Support","Read Access":"Lesezugriff","Reason for the escalation, the business context, the competitive situation, past support experience":"Grund für die Eskalation, Geschäftskontext, Wettbewerbssituation, Support-Erfahrung in der Vergangenheit","Recommendations":"Empfehlungen","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"Red Hat Access erleichtert Ihnen die Problemdiagnose, Selbsthilfe und Kommunikation mit uns über das Red Hat Kundenportal. Um auf die Ressourcen im Red Hat Kundenportal zugreifen zu können, müssen Sie Ihre gültige Anmeldedaten für das Kundenportal angeben.","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"Die Anmeldedaten für das Red Hat Kundenportal unterscheiden sich von den Anmeldedaten für dieses Produkt.","Red Hat Diagnose":"Red Hat Diagnose","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"Red Hat Global Support Services (GSS) und Red Hat Global Partner Enablement haben die Partner-Eskalation eingerichtet, um es unseren strategischen Partnern zu ermöglichen, ungelöste oder geschäftskritische Kunden-Supporttickets an das GSS-Management zu eskalieren. Dieser Vorgang hilft Ihnen und Red Hat dabei, die Probleme Ihrer Kunden besser zu verwalten und stellt einen Weg bereit, die Lösung dieser Probleme voranzutreiben.","Red Hat Login":"Red Hat Login","Red Hat Support Severity Level Definitions":"Red Hat Support Schweregrad-Definitionen","Red Hat Support Ticket Number":"Red Hat Support-Ticketnummer","Refining top solutions":"Beste Lösungen verfeinern","Reply":"Antworten","Request Management Escalation":"Management-Eskalation beantragen","Request escalation":"Eskalation beantragen","Requestor":"Anfrager","Resolution":"Lösung","SBR Group":"SBR-Gruppe","SBT":"SBT","SBT State":"SBT-Status","SUPPORT CASES":"SUPPORT-TICKETS","Save":"Speichern","Save Changes":"Änderungen speichern","Save Group":"Gruppe speichern","Search":"Suchen","Search Articles and Solutions":"Artikel und Lösungen durchsuchen","Search Cases By Number":"Tickets nach Nummer durchsuchen","Search Knowledgebase Solutions":"Knowledgebase-Lösungen durchsuchen","Search Solutions":"Lösungen durchsuchen","Search Support Case":"Support-Ticket suchen","Select File":"Datei wählen","Select Log":"Protokoll wählen","Select a User":"Benutzer auswählen","Send Email Notifications to":"E-Mail-Benachrichtigungen senden an","Send Request":"Anforderung senden","Server File(s) To Attach:":"Anzuhängende Server-Dateien:","Severity":"Schweregrad","Sign in":"Anmelden","Sign into the Red Hat Customer Portal":"Melden Sie sich beim Red Hat Kundenportal an","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"Navigieren Sie zu einer Protokolldatei und wählen Sie diese aus der Liste links aus, klicken Sie anschließend auf die Schaltfläche \"Datei wählen\".","Size":"Größe","Sort by":"Sortieren nach","Special Handling":"Besondere Behandlung","Start Time":"Startzeit","Status":"Status","Strategic":"Strategisch","Submit":"Absenden","Submit Attachment":"Anhang absenden","Submit Request":"Anfrage absenden","Successfully created case number {{caseNumber}}":"Ticketnummer {{caseNumber}} erfolgreich erstellt","Successfully created group {{groupName}}":"Gruppe {{groupName}} erfolgreich erstellt","Successfully deleted attachment:{{attachmentName}}":"Anhang {{attachmentName}} erfolgreich gelöscht","Successfully deleted group {{groupName}}":"Gruppe {{groupName}} erfolgreich gelöscht","Successfully deleted groups.":"Gruppen erfolgreich gelöscht.","Successfully set {{groupName}} as {{userName}}'s default group.":"Standardgruppe für {{userName}} erfolgreich auf {{groupName}} gesetzt.","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"Anhang {{attachmentFileName}} erfolgreich zum Ticket {{caseNumber}} hochgeladen","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"Anhang {{attachmentName}} erfolgreich zum Ticket {{caseNumber}} hochgeladen","Successfully uploaded attachment.":"Anhang erfolgreich hochgeladen.","Suggested Solutions":"Vorgeschlagene Lösungen","Summary of Request":"Zusammenfassung der Anfrage","Support":"Support","Support Level":"Supportlevel","Support Subscription Required":"Support-Subskription erforderlich","TAM":"TAM","Target Date":"Zieldatum","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"Ihre Berechtigungsnachweise sind gültig, aber Sie erhalten keinen <b>direkten Support von Red Hat.</b>","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"Mithilfe des Protokollbetrachters können Sie sowohl Protokolldateien von Applikationen untersuchen, als auch ein Support-Ticket bei Red Hat Global Support Services einreichen.","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"Die von Ihnen angeforderte Seite wurde nicht gefunden. Möglicherweise hat sich der Link geändert, die Seite wurde entfernt, oder Name und Adresse wurden geändert. Möglicherweise steht Ihnen die Seite auch aus technischen Gründen nicht zur Verfügung.","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"Der Anfrager erhält daraufhin eine E-Mail (an die unten angegebene E-Mail-Adresse) mit der ICE-Ticketnummer sowie weiteren Information darüber, wie der Fortschritt des Tickets nachverfolgt werden kann.","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"Dieses interne Formular zur Kundeneskalation kann von jedem Red Hat Mitarbeiter verwendet werden, um Managementunterstützung für Probleme zu erhalten, die eine größere Aufmerksamkeit über die standardmäßigen Support-Verfahren hinaus erfordern. Bitte werfen Sie einen Blick auf die","This is your 8 digit Red Hat Support ticket number":"Dies ist Ihre 8-stellige Red Hat Support-Ticketnummer","This release is now retired, please refer to the recommended FAQ prior to filing a case":"Diese Release ist veraltet, bitte werfen Sie einen Blick auf die empfohlenen FAQ, bevor Sie ein Ticket öffnen.","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"Dies ist die E-Mail-Adresse, die Sie für das Red Hat Kundenportal oder Partner Center verwenden","Thursday End Time:":"Donnerstag Endzeit:","Thursday Start Time:":"Donnerstag Startzeit:","To Learn more view the":"Mehr dazu unter","To learn more, visit the":"Mehr dazu unter","To view a recommendation, click on it.":"Klicken Sie auf eine Empfehlung, um sie anzusehen.","Top Solutions":"Beste Lösungen","Transcript of chat between":"Mitschrift des Chats zwischen","Tuesday End Time:":"Dienstag Endzeit:","Tuesday Start Time:":"Dienstag Startzeit:","Unauthorized.":"Nicht autorisiert.","Ungrouped Case":"Nicht gruppiertes Ticket","Ungrouped Cases":"Nicht gruppierte Tickets","Update":"Aktualisieren","Updating Recommendations":"Empfehlungen werden aktualisiert","Upload Attachments":"Anhänge hochladen","Uploading attachment...":"Anhang wird hochgeladen...","Uploading attachments...":"Anhänge werden hochgeladen...","User Name":"Benutzername","User does not have permissions to set default case group.":"Benutzer besitzt keine Berechtigung, um standardmäßige Ticketgruppe festzulegen","User does not have proper credentials to manage case groups.":"Benutzer besitzt keine Anmeldeinformationen, um Ticketgruppen zu verwalten.","Version":"Version","View Production Support Service Level Agreement":"Service-Level-Vereinbarung Produktions-Support ansehen","Violates SLA":"Verletzt SLA","Was not able to fetch user given ssoUserName":"Vom Benutzer angegebener SSO-Benutzername konnte nicht abgerufen werden","Wednesday End Time:":"Mittwoch Endzeit:","Wednesday Start Time:":"Mittwoch Startzeit:","Write Access":"Schreibzugriff","Yes":"Ja","Yes, Submit":"Ja, absenden","You have successfully logged out of the Red Hat Customer Portal.":"Sie haben sich erfolgreich beim Red Hat Kundenportal abgemeldet.","You must be logged in to use this functionality.":"Sie müssen angemeldet sein, um diese Funktionalität zu nutzen.","Your Cases":"Ihre Tickets","Your Email address":"Ihre E-Mail-Adresse","Your Ice Escalation request has been sent successfully":"Ihre ICE-Eskalationsanfrage wurde erfolgreich gesendet","Your Partner Escalation request has been sent successfully":"Ihre Partner-Eskalationsanfrage wurde erfolgreich gesendet","Your Phone Number":"Ihre Telefonnummer","Your Pins":"Ihre Pins","Your Red Hat Contact Phone Number":"Ihre Red Hat Kontakt-Telefonnummer","Your Red Hat Email Address":"Ihre Red Hat E-Mail-Adresse","and":"und","at":"um","click here":"hier klicken","for more information about the ICE process.":"für weitere Informationen über den ICE-Vorgang.","for more information.":"für weitere Informationen.","{{charactersLeft}} characters left.":"{{charactersLeft}} Zeichen verbleibend.","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"{{errorFileName}} kann nicht angehängt werden, da die Größe {{errorFileSize}} GB überschreitet. Für größere Dateien bitte FTP verwenden (dropbox.redhat.com).","{{noteCharactersLeft}} characters left.":"{{noteCharactersLeft}} Zeichen verbleibend."});
    gettextCatalog.setStrings('es', {"(In reply to {{personName}})":"(En respuesta a {{personName}})","(More info)":"(Más información)","* All fields are mandatory.":"*Todos los campos son obligatorios.","* marked fields are mandatory fields.":"* los campos marcados son obligatorios.","24x7 Contact":"Contacto 24x7","24x7 Coverage":"Cubrimiento 24x7","24x7 Support":"Soporte 24x7","Account":"Cuenta","Account Information":"Información de la cuenta","Account Name":"Nombre de la cuenta","Account Notes":"Notas de la cuenta","Account not found.":"No se encontró la cuenta.","Active":"Activo","Add":"Agregar","Adding user {{userName}} to case.":"Agregando el usuario {{userName}} al caso.","All Attachments":"Todos los adjuntos","All Groups":"Todos los grupos","Already Escalated?":"¿Ya ha escalado?","Alternate Case ID":"ID de caso alternativo","Are you sure you want to change this case severity to {{severityName}}?":"¿Está seguro de que desea cambiar este caso a gravedad {{severityName}}?","Are you sure you want to change this case status to {{statusName}}?":"¿Está seguro de que desea cambiar este caso a estado {{statusName}}?","Are you sure you want to close the selected cases?":"¿Está seguro de que desea cerrar los casos seleccionados?","Assigned to":"Asignado a","Attach Another File":"Adjuntar otro archivo","Attach File":"Adjuntar archivo","Attach Foreman logs:":"Adjuntar registros Foreman:","Attached":"Adjuntado","Attached By":"Adjuntado por","Attached Files":"Archivos adjuntos","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"El adjuntar los registros y los archivos de diagnóstico mejora de manera importante el tiempo de resolución. ¿Desea continuar sin adjuntar ningún archivo?","Attaching logs or other diagnostics files typically results in faster resolution.":"Por lo general, al adjuntar  archivos de registro y otros diagnósticos se obtienen soluciones con más celeridad.  ","Available Log Files":"Archivos de registro disponibles","BACK":"ATRÁS","BREACH":"VIOLACIÓN","Back":"Atrás","Based on your description, here are some possible solutions":"Con base en su descripción, estas son las soluciones posibles:","Breached by {{breachTime}}":"Violación por parte de {{breachTime}}","Breaching in {{breachTime}}":"Violación en {{breachTime}}","Bugzilla Number":"Número de Bugzilla","Bugzilla Tickets":"Tiquetes de Bugzilla","Bugzillas":"Bugzillas","Business Hours":"Horario laboral","CASE {{CaseService.kase.case_number}}":"CASO {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"CASO {{caseNumber}}","CREATE A NEW SUPPORT CASE":"CREAR UN NUEVO CASO DE SOPORTE","Cancel":"Cancelar","Case  {{caseNumber}} successfully closed.":"Caso  {{caseNumber}} cerrado exitosamente.","Case Bugzillas":"Caso en Bugzilla","Case Description":"Descripción de caso","Case Detail":"Detalles del caso","Case Discussion":"Discusión del caso","Case Escalations":"Escalamiento del caso","Case Group":"Grupo de caso","Case Group (Optional)":"Grupo de caso (Opcional)","Case Group Name:":"Nombre del grupo de casos: ","Case Group:":"Grupo de casos:","Case History":"Historial de casos","Case Information":"Información de casos","Case Name":"Nombre de casos","Case Overview":"Visión general del caso","Case Owner (A-Z)":"Propietario del caso (A-Z)","Case Owner (Z-A)":"Propietario del caso (A-Z)","Case Resolution":"Resolución del caso","Case Summary":"Resumen del caso","Case Type":"Tipo de casos","Case group successfully updated.":"Grupo de caso se actualizó correctamente.","Case severity was changed.":"Cambió la gravedad del caso.","Case status was changed.":"Cambió el estado del caso.","Case users successfully updated.":"Usuarios de caso se actualizaron correctamente.","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"Caso {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"Caso {{caseNumber}} cerrado exitosamente.","Chat Offline":"Chat desconectado","Chat with Support":"Chat con soporte","Choose File(s) To Attach:":"Elegir  archivo(s) a adjuntar:","Close":"Cerrar","Close Case":"Cerrar caso","Close messages":"Cerrar mensajes","Closed":"Cerrado","Closed Support Cases":"Casos de soporte cerrados","Closing Cases.":"Cierre de casos.","Closing cases.":"Cierre de casos.","Comment:":"Comentario:","Create Case Group":"Crear un grupo de casos","Create New Case Group":"Crear un nuevo grupo de casos","Create a New Support Case":"Crear soporte de caso","Created By":"Creado por","Created by {{case.created_by}} on {{case.created_date}}":"Creado por {{case.created_by}} en {{case.created_date}}","Creating Ice Escalation request .....":"Creando solicitud de escalamiento Ice...","Creating Partner Escalation request .....":"Creando solicitud de  escalamiento de socio .....","Creating case...":"Creando caso...","Creating group {{groupName}}...":"Creando grupo {{groupName}}...","Customer":"Cliente","Customer Account Number":"Número de cuenta de usuario","Customer Contact Email":"Correo-e de usuario","Customer Contact Name":"Nombre de contacto del usuario","Customer Contact Number":"Número de contacto del usuario","Customer GEO":"GEO de usuario","Delete":"Borrar","Delete Group":"Borrar grupo","Deleting attachment: {{attachmentName}}":"Borrando anexo: {{attachmentName}}","Description":"Descripción","Diagnose":"Diagnóstico","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"Diferentes opciones de niveles de soporte podrían estar disponibles en las suscripciones de su cuenta. El nivel de soporte determina el tipo de respuesta que puede esperar para su caso de soporte. ","Discard Changes":"Descartar cambios","Discussion":"Discusión","Edit":"Editar","Email address is incorrect":"La dirección de correo-e es incorrecta","Entitlement Information":"Información de derechos","Environment":"Entorno","Error: Failed to upload attachment.":"Error: No se puede cargar anexo.","Error: Failed to upload attachment. Message: {{errorMessage}}":"Error: No se logró cargar el anexo. Mensaje: {{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"Error: No se logró cargar el anexo. Mensaje:{{errorMessage}}","Escalations":"Escalamiento","Expectation":"Expectativa","Export":"Exportar","Export as CSV":"Exportar como CSV","Exporting CSV...":"Exportando CSV..","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"No se logró cargar el anexo {{attachmentName}} en el caso {{caseNumber}}: {{errorMessage}}","File description":"Descripción de archivo","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"Los nombres de los archivos deben tener un límite de 80 caracteres. El tamaño máximo para adjuntos de archivos cargados a la red es de 1 GB. Para archivos más grandes, por favor expórtelos en FTP a dropbox.redhat.com.","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"Se presentó el {{CaseService.kase.created_date}} por parte de {{CaseService.kase.contact_name}}","Filename":"Nombre de archivo","Find My Account Number":"Buscar mi número de cuenta","First Name":"Nombre","For example: 1-888-467-3342":"Por ejemplo: 1-888-467-3342","Friday End Time:":"Hola de finalización el viernes:","Friday Start Time:":"Hora de inicio el viernes:","GSS ICE FAQ":"Preguntas frecuentes GSS ICE","GSS ICE Form":"Formulario GSS ICE","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"GSS está trabajando para mejorar el proceso ICE a través del uso de correo-e. Visite frecuentemente este espacio para obtener más  información tan pronto como esté disponible.","Get faster results.":"Obtenga resultados más rápidos.","Group Name:":"Nombre del grupo:","Group Users:":"Usuarios de grupos:","Handpicked For You":"Seleccionada a mano para usted","Highest Severity":"Gravedad más alta","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"Si este formulario no funciona por alguna razón, envíe un tiquete a helpdesk@redhat.com anotando el problema con el sistema de tiquetes GSS y el formulario ICE.","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"Si esta solicitud es para obtener información de su parte o del cliente y si necesita que le contactemos para discutir el problema.","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"Si está solicitando una revisión de cuenta, si está relacionada con un  problema específico, un tiquete o,  si se trata de una queja en general o genérica.","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"Si cree que debería tener acceso a este recurso, por favor <a href=\"/support/contact/customerService.html\">contacte a Servicio al c liente</a>.  Es posible que su nombre de usuario de Red Hat no esté asociado a la cuenta correcta de su organización, o puede que haya algún problema con la suscripción. En cualquier caso, el Servicio al cliente le ayudará a resolver su problema. ","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"Si siente que el problema ha empeorado o que su caso debería tener más prioridad, por favor, proporcione un comentario detallado y su caso será revisado por un gerente de soporte.","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"Si usted aún considera que debe abrir un caso de soporte, seleccione 'Abrir un nuevo caso de soporte'. El caso será prellenado con la porción del registro anteriormente seleccionada.","Internal Priority":"Prioridad interna","Internal Status":"Estatus interno","Is Public:":"Es público:","Issue Description":"Descripción del problema","Last Modified By":"Última modificación de","Last Name":"Apellido","Last Updated By":"Actualizado por","Learn More":"Aprender más","Learn more":"Aprender más","Life of Case":"Vida del caso","Loading cases...":"Cargando casos...","Locating top solutions":"Buscamos las mejores soluciones","Log File Viewer":"Archivo de archivo de registro","Log In":"Ingresar","Log Out":"Salir ","Logged into the Red Hat Customer Portal as":"Ingresó al Portal del cliente de Red Hat como","Logs":"Registros","Lowest Severity":"Gravedad más baja","MISSING SBT. Entitlement status: {{entitlementStatus}}":"FALTA HORA DE VIOLACIÓN DEL SERVICIO. Estado de derechos: {{entitlementStatus}}","Manage Case Groups":"Administrar grupos de casos","Manage Default Case Groups":"Administrar grupos de casos predeterminados","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"Modificado por {{case.last_modified_by}} el {{case.last_modified_date}}","Monday End Time:":"Hora de finalización el lunes:","Monday Start Time:":"Hora de inicio el lunes:","My Cases":"Mis casos ","N/A":"N/A","NEXT":"SIGUIENTE","NONE":"NINGUNO","NOT BREACHED":"NO VIOLADO","Name":"Nombre","Need to raise a concern to Red Hat Support management?":"¿Necesita escalar su problema a administración de Red Hat Support?","Negotiated Entitlement Process":"Proceso de negociación de derechos","Newest Date Created":"Fecha creada más reciente","Newest Date Modified":"Fecha modificada más reciente","Newest to Oldest":"Más reciente a más viejo","No":"No","No Files were attached to your case.":"No se adjuntaron archivos a su caso.","No attachments added":"No se han agregado adjuntos","No cases found with given filters.":"No se encontraron casos con los filtros proporcionados. ","No cases found.":"No se encontraron casos.","No groups found.":"No se encontraron grupos.","No linked bugzillas":"No hay Bugzillas vinculados","No match found":"No se encontró ninguna coincidencia","No solutions found.":"No se encontraron soluciones","No url roles or user roles found.":"No se encontraron roles de usuario o de url.","No, Go Back":"No, regrese","Not Found":"No se pudo encontrar","Not Logged into the Red Hat Customer Portal":"No ha ingresado al Portal del cliente de Red Hat","Note:":"Nota:","Notes:":"Notas:","Number of Open Cases":"Número de casos abiertos","Oldest Date Created":"Fecha creada menos reciente","Oldest Date Modified":"Fecha modificada menos reciente","Oldest to Newest":"Del más antiguo al más nuevo","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"Cuando se ha enviado la solicitud y el tiquete ICE se escala al sistema de administración de casos GSS, se pone en conocimiento del equipo de liderazgo de GSS.","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"Una vez que haya seleccionado su archivo de registro puede diagnosticar cualquier parte del archivo de registro y hacer clic en el botón 'Diagnóstico Red Hat'. Esto ayudará a desplegar los artículos importantes y soluciones de nuestra base de conocimientos.","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"Una vez enviada su solicitud, el caso de escalamiento de socios será abierto con GSS y el equipo de liderazgo de GSS será notificado. Luego recibirá la dirección de correo-e provista abajo con el número de caso de escalamiento del socio e información adicional sobre cómo hacer seguimiento al progreso del caso.","Open":"Abrir","Open New Case":"Abrir un caso de soporte","Open Support Cases":"Abrir casos de soporte","Open a New Support Case":"Abrir un nuevo caso de soporte","Open and Closed":"Abiertos y cerrados","Open and Closed Support Cases":"Casos de soporte abiertos y cerrados","Owned by {{case.contact_name}}":"Propietario {{case.contact_name}}","Owner":"Propietario","Owner Information":"Información de propietario","Password":"Contraseña","Please":"Por favor","Please Add File Description":"Por favor agregue la descripción del archivo","Please Select the Machine":"Por favor, seleccione la máquina","Please check the requestor email address":"Por favor, revise la dirección de correo-e del solicitante","Please note, contents of this field are not visible to Red Hat Support professionals.":"Por favor, observe que el contenido de este campo no está visible a los profesionales de Red Hat Support.","Please provide as much detail as possible to help us understand the issue, for example:":"Por favor, proporcione tanta información como sea posible para ayudarnos a entender el problema. Por ejemplo:","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"Por favor proporcione tanta información como le sea posible para ayudarnos a entender el problema, por ejemplo: la razón de escalado, contexto empresarial, situación competitiva, y experiencia de soporte anterior.","Please provide as much information as possible in the form.":"Por favor, proporcione cuanta información le sea posible en este formulario.","Please provide as much information/detail as possible in the form.":"Por favor, proporcione cuanta información o detalle le sea posible en este formulario.","Please provide expectations and desired outcomes from yourself and from the customer":"Por favor diga cuáles son las expectativas y resultados deseados de su parte y de parte del usuario","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"Por favor, solicite el número de cuenta del cliente, si le es posible, de lo contrario use su número de cuenta Red Hat. Para encontrar el  número de cuenta, haga clic en el nombre de usuario en la esquina superior derecha de la página.","Post":"Enviar","Priority Customer Support Routing":"Procedimiento de soporte para el cliente prioritario ","Private":"Privado","Private Notes":"Notas privadas","Product":"Producto","Product Version":"Versión del producto","Production Support Service Level Agreement":"Acuerdo a nivel de servicio de soporte de producción","Read Access":"Acceso de lectura","Reason for the escalation, the business context, the competitive situation, past support experience":"La razón del escalamiento, el contexto empresarial, la situación competitiva y la  experiencia de soporte anterior.","Recommendations":"Recomendaciones","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"El acceso de Red Hat le facilita la resolución de problemas, diagnostica problemas y se encarga con nosotros  a través del Portal del cliente de Red Hat. Para acceder a los recursos de Portal del cliente de Red Hat, deberá validar las credenciales del portal. ","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"Las credenciales del Portal del cliente de Red Hat difieren de las credenciales utilizadas para ingresar dentro de este producto.","Red Hat Diagnose":"Diagnosis de Red Hat","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"Red Hat Global Support Services (GSS) y Red Hat Global Partner Enablement han establecido el sistema de escalamiento para permitir a nuestros socios estratégicos escalar casos de soporte no resueltos o casos de soporte al cliente de misión crítica a liderazgo de GSS. Este proceso ayudará, tanto a usted como a Red Hat, a manejar mejor los problemas de sus clientes y a proporcionar un proceso que conduzca a su resolución.","Red Hat Login":"Nombre de usuario de Red Hat","Red Hat Support Severity Level Definitions":"Definiciones del nivel de gravedad de soporte de Red Hat","Red Hat Support Ticket Number":"Número de tiquete del soporte de Red Hat","Refining top solutions":"Refinamiento de las mejores soluciones","Reply":"Responder","Request Management Escalation":"Solicitar escalamiento administrativo","Request escalation":"Solicitud de escalamiento","Requestor":"Solicitante","Resolution":"Resolución","SBR Group":"Grupo SBR","SBT":"HORA DE VIOLACIÓN DEL SERVICIO","SBT State":"Estado de la Hora de violación del servicio","SUPPORT CASES":"CASOS DE SOPORTE","Save":"Guardar","Save Changes":"Guardar cambios","Save Group":"Guardar grupo","Search":"Búsqueda","Search Articles and Solutions":"Búsqueda de artículos y soluciones","Search Cases By Number":"Buscar en los casos por número","Search Knowledgebase Solutions":"Buscar en la soluciones de la Base de conocimiento","Search Solutions":"Búsqueda de soluciones","Search Support Case":"Buscar un caso de soporte","Select File":"Seleccionar archivo","Select Log":"Seleccionar registro","Select a User":"Seleccionar usuario","Send Email Notifications to":"Enviar notificaciones de correo a: ","Send Request":"Enviar solicitud","Server File(s) To Attach:":"Archivo(s) de servidor a adjuntar: ","Severity":"Gravedad","Sign in":"Iniciar sesión","Sign into the Red Hat Customer Portal":"Ingresar al Portal del cliente Red Hat","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"Navegue y seleccione un archivo de registro de la lista a la izquierda y haga clic en el botón 'Seleccionar archivo'.","Size":"Tamaño","Sort by":"Organizar por","Special Handling":"Manejo especial","Start Time":"Hora de inicio","Status":"Estatus","Strategic":"Estratégico","Submit":"Enviar","Submit Attachment":"Enviar anexo","Submit Request":"Enviar solicitud","Successfully created case number {{caseNumber}}":"Se creó exitosamente el número de caso {{caseNumber}}","Successfully created group {{groupName}}":"Se creó exitosamente el grupo {{groupName}}","Successfully deleted attachment:{{attachmentName}}":"Se borró exitosamente el anexo:{{attachmentName}}","Successfully deleted group {{groupName}}":"Se borró exitosamente el grupo {{groupName}}","Successfully deleted groups.":"Se borraron los grupos.","Successfully set {{groupName}} as {{userName}}'s default group.":"Se estableció exitosamente {{groupName}} como el grupo predeterminado de {{userName}}.","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"Se cargó de manera exitosa el anexo {{attachmentFileName}} al caso {{caseNumber}}","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"Se cargó exitosamente el anexo {{attachmentName}} al caso {{caseNumber}}","Successfully uploaded attachment.":"Se cargó el anexo con éxito.","Suggested Solutions":"Soluciones sugeridas","Summary of Request":"Resumen de solicitud","Support":"Soporte","Support Level":"Nivel de soporte","Support Subscription Required":"Se requiere una suscripción de soporte","TAM":"TAM","Target Date":"Fecha","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"Las credenciales proporcionadas son válidas,  pero <b>usted no tiene soporte directo de Red Hat.</b>","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"El visor del archivo de registro ofrece la capacidad de diagnosticar registros como también radicar un caso de soporte en Red Hat Global Support Services.","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"La página que busca no está aquí. Es probable que se haya desplazado o quitado, o que  el nombre y dirección hayan cambiado. Podría no estar disponible en el momento, por motivos de  carácter técnico.","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"El solicitante recibirá un correo-e (a la dirección electrónica provista abajo) con el número de tiquete de ICE e información adicional sobre cómo hacer seguimiento al progreso del caso.","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"Este es un formulario de envío al escalamiento de clientes, puede ser utilizado por cualquier empleado de Red Hat para obtener soporte administrativo sobre  problemas que requieren atención por fuera del proceso de soporte estándar. Por favor visite ","This is your 8 digit Red Hat Support ticket number":"Este es su número del tiquete de 8 dígitos de Red Hat Support ","This release is now retired, please refer to the recommended FAQ prior to filing a case":"Este lanzamiento ha sido retirado, por favor consulte las preguntas frecuentes antes de llenar el caso.","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"Esta debe ser la dirección de correo-e asociada con su Portal del cliente Red Hat o al  ingreso al Centro  de socios","Thursday End Time:":"Hora de finalización el jueves:","Thursday Start Time:":"Hora de inicio el jueves:","To Learn more view the":"Para mayor información consulte el","To learn more, visit the":"Para mayor información visite el","To view a recommendation, click on it.":"Para ver una recomendación, haga clic en ella.","Top Solutions":"Las mejores soluciones","Transcript of chat between":"Transcripción del chat entre","Tuesday End Time:":"Hora de finalización el martes:","Tuesday Start Time:":"Hora de inicio el martes:","Unauthorized.":"No autorizado.","Ungrouped Case":"Caso desagrupado","Ungrouped Cases":"Casos desagrupados","Update":"Actualizar","Updating Recommendations":"Actualización de recomendaciones","Upload Attachments":"Cargar adjuntos","Uploading attachment...":"Cargando anexo...","Uploading attachments...":"Cargando anexos...","User Name":"Nombre de usuario","User does not have permissions to set default case group.":"El usuario no tiene permisos para grupo de casos predeterminados.","User does not have proper credentials to manage case groups.":"El usuario no tiene credenciales  para manejar  grupo de casos.","Version":"Versión","View Production Support Service Level Agreement":"Ver el acuerdo a nivel de servicio de soporte de producción","Violates SLA":"Incumple SLA","Was not able to fetch user given ssoUserName":"No se pudo encontrar el usuario dado ssoUserName","Wednesday End Time:":"Hora de finalización el miércoles:","Wednesday Start Time:":"Hora de inicio el miércoles:","Write Access":"Escribir acceso","Yes":"Sí","Yes, Submit":"Sí, enviar.","You have successfully logged out of the Red Hat Customer Portal.":"Ha salido del Portal del cliente de Red Hat","You must be logged in to use this functionality.":"Debe haber ingresado para poder usar esta funcionalidad.","Your Cases":"Sus casos","Your Email address":"Su dirección de correo electrónico","Your Ice Escalation request has been sent successfully":"Su solicitud de escalamiento Ice ha sido enviada con éxito.","Your Partner Escalation request has been sent successfully":"Su solicitud de escalamiento ha sido enviada con éxito","Your Phone Number":"Su número de teléfono","Your Pins":"Sus pins","Your Red Hat Contact Phone Number":"El número de contacto telefónico de Red Hat","Your Red Hat Email Address":"Su Red Hat Email Address","and":"y","at":"en","click here":"Clic aquí","for more information about the ICE process.":"para más información sobre el  proceso ICE.","for more information.":"para más información.","{{charactersLeft}} characters left.":"Quedan {{charactersLeft}} caracteres.","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"{{errorFileName}} no se puede anexar porque tiene más de {{errorFileSize}} GB. Envíe por FTP los archivos grandes a dropbox.redhat.com.","{{noteCharactersLeft}} characters left.":"Quedan {{noteCharactersLeft}} caracteres."});
    gettextCatalog.setStrings('fr', {"(In reply to {{personName}})":"(en réponse à {{personName}})","(More info)":"(Plus d'informations)","* All fields are mandatory.":"* Tous les champs sont obligatoires.","* marked fields are mandatory fields.":"* les champs marqués sont des champs obligatoires.","24x7 Contact":"Contact 24h/24, 7j/7","24x7 Coverage":"Couverture 24h/24, 7j/7","24x7 Support":"Assistance 24h/24, 7j/7","Account":"Compte","Account Information":"Informations du compte","Account Name":"Nom du compte","Account Notes":"Notes de compte","Account not found.":"Compte introuvable.","Active":"Actif","Add":"Ajouter","Adding user {{userName}} to case.":"Ajout de l'utilisateur {{userName}} au dossier.","All Attachments":"Toutes les pièces jointes","All Groups":"Tous les groupes","Already Escalated?":"Déjà escaladé ?","Alternate Case ID":"ID alternatif du dossier","Are you sure you want to change this case severity to {{severityName}}?":"Êtes-vous certain de vouloir changer le niveau de sévérité de ce dossier en {{severityName}} ?","Are you sure you want to change this case status to {{statusName}}?":"Êtes-vous certain de vouloir changer le statut de ce dossier en {{statusName}} ?","Are you sure you want to close the selected cases?":"Êtes-vous certain de vouloir fermer les dossiers sélectionnés ?","Assigned to":"Assigné à","Attach Another File":"Joindre un autre fichier","Attach File":"Joindre un fichier","Attach Foreman logs:":"Joindre des journaux Foreman :","Attached":"Joint","Attached By":"Joint par :","Attached Files":"Fichiers joints","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"L'ajout de journaux et fichiers de diagnostique en pièce jointe améliore fortement le temps de résolution. Souhaitez-vous continuer sans joindre de fichier ?","Attaching logs or other diagnostics files typically results in faster resolution.":"L'ajout de journaux ou autres fichiers de diagnostique en pièce jointe entraîne habituellement des résolutions plus rapides.","Available Log Files":"Fichiers journaux disponibles","BACK":"RETOUR","BREACH":"FAILLE","Back":"Précédent","Based on your description, here are some possible solutions":"Ci-dessous figurent quelques solutions possibles basées sur votre description.","Breached by {{breachTime}}":"Enfreint avant {{breachTime}}","Breaching in {{breachTime}}":"Enfreint en {{breachTime}}","Bugzilla Number":"Numéro sur Bugzilla","Bugzilla Tickets":"Tickets sur Bugzilla","Bugzillas":"Bugzillas","Business Hours":"Horaires","CASE {{CaseService.kase.case_number}}":"DOSSIER {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"DOSSIER {{caseNumber}}","CREATE A NEW SUPPORT CASE":"CRÉER UN NOUVEAU DOSSIER D'ASSISTANCE","Cancel":"Annuler","Case  {{caseNumber}} successfully closed.":"Dossier  {{caseNumber}} clôturé.","Case Bugzillas":"Dossier Bugzilla","Case Description":"Description du dossier","Case Detail":"Informations sur le dossier","Case Discussion":"Discussion du dossier","Case Escalations":"Escalade de dossier","Case Group":"Groupe de dossiers","Case Group (Optional)":"Groupe de dossiers (optionnel)","Case Group Name:":"Nom du groupe de dossiers :","Case Group:":"Groupe du dossier :","Case History":"Historique du dossier","Case Information":"Informations sur le dossier","Case Name":"Nom du dossier","Case Overview":"Vue d'ensemble du dossier","Case Owner (A-Z)":"Titulaire du dossier (A-Z)","Case Owner (Z-A)":"Titulaire du dossier (Z-A)","Case Resolution":"Résolution de dossier","Case Summary":"Résumé du dossier","Case Type":"Type de dossier","Case group successfully updated.":"Groupe de dossiers mis à jour avec succès.","Case severity was changed.":"Le niveau de sévérité du dossier a été modifié.","Case status was changed.":"Le statut du dossier a été modifié.","Case users successfully updated.":"Utilisateurs du dossier mis à jour avec succès.","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"Dossier {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"Dossier  {{caseNumber}} clôturé.","Chat Offline":"Discuter hors-ligne","Chat with Support":"Discuter avec le service d'assistance","Choose File(s) To Attach:":"Choisir le(s) fichier(s) à joindre :","Close":"Fermer","Close Case":"Clôturer le dossier","Close messages":"Fermer les messages","Closed":"Fermés","Closed Support Cases":"Dossiers d'assistance fermés","Closing Cases.":"Clôture des dossiers.","Closing cases.":"Fermeture des dossiers.","Comment:":"Commentaire :","Create Case Group":"Créer un groupe de dossiers","Create New Case Group":"Créer un nouveau groupe de dossiers","Create a New Support Case":"Créer un nouveau dossier d'assistance","Created By":"Créé par","Created by {{case.created_by}} on {{case.created_date}}":"Créé par {{case.created_by}} le {{case.created_date}}","Creating Ice Escalation request .....":"Création d'une requête d'Escalade Ice...","Creating Partner Escalation request .....":"Création d'une requête d'Escalade Partenaire...","Creating case...":"Création du dossier...","Creating group {{groupName}}...":"Création de groupe {{groupName}}...","Customer":"Client","Customer Account Number":"Numéro de compte du client","Customer Contact Email":"Courriel de contact du client","Customer Contact Name":"Nom du contact du client","Customer Contact Number":"Numéro de contact du client","Customer GEO":"GEO client","Delete":"Supprimer","Delete Group":"Supprimer le groupe","Deleting attachment: {{attachmentName}}":"Suppression de la pièce jointe : {{attachmentName}}","Description":"Description","Diagnose":"Diagnostiquer","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"Différentes options de niveau de support peuvent être disponibles selon les abonnements de votre compte. Votre niveau de support détermine le type de réponse auquel vous pouvez vous attendre pour votre dossier d'assistance.","Discard Changes":"Abandonner les modifications","Discussion":"Discussion","Edit":"Modifier","Email address is incorrect":"L'adresse électronique est incorrecte","Entitlement Information":"Informations sur les droits d'accès","Environment":"Environnement","Error: Failed to upload attachment.":"Erreur : Le téléversement de la pièce jointe a échoué.","Error: Failed to upload attachment. Message: {{errorMessage}}":"Erreur : le téléversement de la pièce jointe a échoué. Message : {{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"Erreur : le téléversement de la pièce jointe a échoué. Message : {{errorMessage}}","Escalations":"Escalades","Expectation":"Attentes","Export":"Exporter","Export as CSV":"Exporter en tant que CSV","Exporting CSV...":"Export CRV en cours...","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"La pièce jointe {{attachmentName}} n'a pas été ajoutée au dossier {{caseNumber}} : {{errorMessage}}","File description":"Description du fichier","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"Les noms de fichiers sont limités à 80 caractères. La taille de fichier maximale pour les pièces jointes téléversées par le web est de 1 Go. Pour les fichiers plus importants, veuillez utiliser FTP (dropbox.redhat.com).","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"Archivé le {{CaseService.kase.created_date}} par {{CaseService.kase.contact_name}}","Filename":"Nom du fichier","Find My Account Number":"Trouver mon numéro de compte","First Name":"Prénom","For example: 1-888-467-3342":"Par exemple : 1-888-467-3342","Friday End Time:":"Heure de fermeture le vendredi :","Friday Start Time:":"Heure d'ouverture le vendredi","GSS ICE FAQ":"FAQ ICE de GSS","GSS ICE Form":"Formulaire ICE de GSS","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"GSS travaille actuellement à l'amélioration du processus ICE à travers l'utilisation de courriers électronique. Des détails supplémentaires seront publiés sur cet espace au fur et à mesure de leur mise à disponibilité.","Get faster results.":"Obtenez des résultats plus rapides.","Group Name:":"Nom du groupe :","Group Users:":"Utilisateurs du groupe :","Handpicked For You":"Votre sélection personnalisée","Highest Severity":"Sévérité la plus élevée","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"Si ce formulaire ne fonctionne pas pour tout type de raison, veuillez soumettre un ticket sur helpdesk@redhat.com en incluant qu'il y a un problème avec les tickets GSS et le formulaire ICE","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"S'il s'agit d'une requête pour informations de votre part ou de la part du client et si vous souhaitez que nous vous contactions pour discuter des problèmes.","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"Si vous effectuez un requête de révision de compte, si ceci est lié à un problème ou ticket particulier, ou à une série de problèmes ou de tickets particuliers, ou s'il s'agit d'une plainte générale ou générique","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"Si vous pensez être autorisé à consulter cette ressource, veuillez <a href=\"/support/contact/customerService.html\">contacter le service client</a> pour obtenir de l'aide. Il se peut que votre identifiant Red Hat ne soit pas associé à un compte approprié pour votre organisation ou que votre abonnement présente un dysfonctionnement. Quel que soit le problème rencontré, le service client devrait pouvoir vous aider à le résoudre.","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"Si vous estimez que votre problème s'est aggravé ou qu'il devrait bénéficier d'un niveau de priorité plus élevé, saisissez un commentaire détaillé afin qu'un responsable d'assistance se charge de votre dossier.","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"Si vous souhaitez tout de même ouvrir un nouveau dossier d'assistance, veuillez sélectionner « Ouvrir un nouveau dossier d'assistance ». Le dossier sera pré-rempli avec la portion du journal précédemment sélectionnée.","Internal Priority":"Priorité interne","Internal Status":"Statut interne","Is Public:":"Publique :","Issue Description":"Description du problème","Last Modified By":"Dernière modification le","Last Name":"Nom de famille","Last Updated By":"Dernière mise à jour effectuée par","Learn More":"En savoir plus","Learn more":"En savoir plus","Life of Case":"Historique du dossier","Loading cases...":"Chargement des dossiers...","Locating top solutions":"Recherche des meilleures solutions","Log File Viewer":"Visionneur de fichiers journaux","Log In":"Connexion","Log Out":"Déconnexion","Logged into the Red Hat Customer Portal as":"Connecté sur le Portail Client Red Hat en tant que","Logs":"Journaux","Lowest Severity":"Sévérité la plus basse","MISSING SBT. Entitlement status: {{entitlementStatus}}":"SBT MANQUANT. Statut des droits : {{entitlementStatus}}","Manage Case Groups":"Gérer les groupes de dossiers","Manage Default Case Groups":"Gérer les groupes de dossiers par défaut","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"Modifié par {{case.last_modified_by}} le {{case.last_modified_date}}","Monday End Time:":"Heure de fermeture le lundi :","Monday Start Time:":"Heure d'ouverture le lundi :","My Cases":"Mes dossiers","N/A":"N/A","NEXT":"SUIVANT","NONE":"RIEN","NOT BREACHED":"NON ENFREINT","Name":"Nom","Need to raise a concern to Red Hat Support management?":"Vous souhaitez faire part de vos préoccupations à la direction du support Red Hat ?","Negotiated Entitlement Process":"Processus de droits négocié","Newest Date Created":"Date de création la plus récente","Newest Date Modified":"Date de modification la plus récente","Newest to Oldest":"Du plus récent au plus ancien","No":"Non","No Files were attached to your case.":"Aucun fichier n'a été joint à votre dossier.","No attachments added":"Aucune pièce jointe nécessaire","No cases found with given filters.":"Aucun dossier trouvé avec les filtres donnés.","No cases found.":"Aucun dossier trouvé.","No groups found.":"Aucun groupe trouvé.","No linked bugzillas":"Aucun bugzilla lié","No match found":"Aucun résultat trouvé","No solutions found.":"Aucune solution trouvée.","No url roles or user roles found.":"Aucun rôle URL ou utilisateur trouvé.","No, Go Back":"Non, revenir en arrière","Not Found":"Introuvable","Not Logged into the Red Hat Customer Portal":"Non connecté sur le Portail Client Red Hat","Note:":"Remarque :","Notes:":"Remarques :","Number of Open Cases":"Nombre de dossiers ouverts","Oldest Date Created":"Date de création la plus ancienne","Oldest Date Modified":"Date de modification la plus ancienne","Oldest to Newest":"Du plus ancien au plus récent","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"Une fois la requête soumise, le ticket ICE sera créé dans le système de gestion de dossiers GSS et porté à l'attention de l'équipe de direction de GSS.","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"Une fois le fichier journal sélectionné, vous pourrez diagnostiquer n'importe quelle partie de celui-ci et cliquer sur le bouton « Diagnostique Red Hat ». Ceci affichera les articles et les solutions correspondants de la base de connaissances Red Hat.","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"Une fois votre requête soumise, un dossier d'escalade partenaire sera ouvert avec GSS et l'équipe de direction de GSS en sera notifiée. Vous recevrez également un courrier électronique à l'adresse électronique fournie ci-dessous avec le numéro du dossier d'escalade partenaire ainsi que des informations supplémentaires sur la manière de suivre sa progression.","Open":"Ouverts","Open New Case":"Ouvrir un nouveau dossier","Open Support Cases":"dossiers d'assistance ouverts","Open a New Support Case":"Ouvrir un nouveau dossier d'assistance","Open and Closed":"Ouverts et fermés","Open and Closed Support Cases":"Dossiers d'assistance ouverts et clos","Owned by {{case.contact_name}}":"Appartient à {{case.contact_name}}","Owner":"Titulaire","Owner Information":"Informations sur le titulaire","Password":"Mot de passe","Please":"S'il vous plaît","Please Add File Description":"Veuillez ajouter la description du fichier","Please Select the Machine":"Veuillez sélectionner la machine","Please check the requestor email address":"Veuillez vérifier l'adresse électronique du demandeur","Please note, contents of this field are not visible to Red Hat Support professionals.":"Veuillez remarquer que le contenu de ce champ n'est pas visible aux professionnels du support Red Hat.","Please provide as much detail as possible to help us understand the issue, for example:":"Veuillez fournir autant de détails que possible afin de nous aider à comprendre le problème. Par exemple :","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"Veuillez fournir autant de détails que possible afin de nous aider à comprendre le problème. Par exemple : la raison de l'escalade, le contexte de l'entreprise, la situation de compétitivité, les expériences précédentes avec le support technique","Please provide as much information as possible in the form.":"Veuillez fournir autant d'informations que possible dans le formulaire.","Please provide as much information/detail as possible in the form.":"Veuillez fournir autant d'informations ou de détails dans le formulaire.","Please provide expectations and desired outcomes from yourself and from the customer":"Veuillez fournir les attentes et résultats souhaités de votre part et de la part du client","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"Veuillez demander le numéro de compte du client si possible, sinon vous pouvez utiliser votre numéro de compte Red Hat. Le numéro du compte peut être trouvé en cliquant sur le nom d'utilisateur dans le coin supérieur droit de cette page.","Post":"Post","Priority Customer Support Routing":"Routage de prise en charge de client prioritaire","Private":"Privé","Private Notes":"Remarques privées","Product":"Produit","Product Version":"Version du produit","Production Support Service Level Agreement":"Contrat SLA (niveau de service) du Support production","Read Access":"Accès en lecture","Reason for the escalation, the business context, the competitive situation, past support experience":"Raison de l'escalade, le contexte de l'entreprise, la situation de compétitivité, les expériences précédentes avec le support technique","Recommendations":"Recommandations","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"Red Hat Access vous permet de  résoudre vos problèmes vous-même, de diagnostiquer les problèmes, et de nous contacter plus facilement, le tout via le Portail Client. Pour accéder aux ressources du Portail Client, vous devrez saisir des informations d'identification valides sur le portail.","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"Les informations d'identification du Portail Client Red Hat diffèrent des informations d'identifications utilisées pour se connecter à ce produit.","Red Hat Diagnose":"Diagnostique Red Hat","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"Le service de support technique Red Hat GSS (« Red Hat Global Support Services ») et « Red Hat Global Partner Enablement » ont créé les Escalades Partenaires (« Partner Escalation ») afin de permettre à nos partenaires stratégiques de signaler les dossiers d'assistance technique client non résolus ou critiques à la direction de GSS. Ce processus vous aidera et aidera Red Hat à mieux gérer les problèmes de vos clients et fournit un procédé permettant de résoudre ces problèmes.","Red Hat Login":"Connexion Red Hat","Red Hat Support Severity Level Definitions":"Définition du niveau de sévérité du support Red Hat","Red Hat Support Ticket Number":"Numéro de ticket du support Red Hat","Refining top solutions":"Affinage des meilleures solutions","Reply":"Répondre","Request Management Escalation":"Demander la remontée d'un problème","Request escalation":"Demander la remontée d'un problème","Requestor":"Demandeur","Resolution":"Résolution","SBR Group":"Groupe SBR","SBT":"SBT","SBT State":"État SBT","SUPPORT CASES":"DOSSIERS D'ASSISTANCE","Save":"Enregistrer","Save Changes":"Enregistrer les modifications","Save Group":"Enregistrer le groupe","Search":"Rechercher","Search Articles and Solutions":"Rechercher des articles et des solutions","Search Cases By Number":"Rechercher les dossiers par numéro","Search Knowledgebase Solutions":"Rechercher des solutions de base de connaissance","Search Solutions":"Rechercher des solutions","Search Support Case":"Rechercher un dossier d'assistance","Select File":"Sélectionner le fichier","Select Log":"Sélectionner un journal","Select a User":"Sélectionner un utilisateur","Send Email Notifications to":"Envoyer des notifications par courrier électronique à","Send Request":"Envoyer la requête","Server File(s) To Attach:":"Fichier(s) du serveur à joindre :","Severity":"Sévérité","Sign in":"Connexion","Sign into the Red Hat Customer Portal":"Connexion au Portail Client Red Hat","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"Veuillez simplement vous rendre sur la liste à gauche, puis sélectionnez un fichier journal et cliquez sur le bouton « Sélectionner le fichier ».","Size":"Taille","Sort by":"Trier par","Special Handling":"Gestion spéciale","Start Time":"Date de lancement","Status":"Statut","Strategic":"Stratégique","Submit":"Valider","Submit Attachment":"Envoyer la pièce jointe","Submit Request":"Valider la requête","Successfully created case number {{caseNumber}}":"Le numéro de dossier {{caseNumber}} a été créé","Successfully created group {{groupName}}":"Le groupe {{groupName}} a été créé","Successfully deleted attachment:{{attachmentName}}":"La pièce jointe {{attachmentName}} a été supprimée","Successfully deleted group {{groupName}}":"Le groupe {{groupName}} a été supprimé","Successfully deleted groups.":"Groupes supprimés avec succès.","Successfully set {{groupName}} as {{userName}}'s default group.":"Le groupe {{groupName}} a été défini  comme le groupe par défaut de {{userName}}.","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"La pièce jointe {{attachmentFileName}} a été ajoutée au dossier {{caseNumber}}","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"La pièce jointe {{attachmentName}} a été ajoutée au dossier {{caseNumber}}","Successfully uploaded attachment.":"Pièce jointe téléversée avec succès.","Suggested Solutions":"Solutions suggérées","Summary of Request":"Résumé de la requête","Support":"Assistance","Support Level":"Niveau de service","Support Subscription Required":"Abonnement à l'assistance technique requis","TAM":"TAM","Target Date":"Date cible","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"Les certifications que vous avez fournies sont valides, mais vous ne bénéficiez pas de l'<b>assistance technique directe de Red Hat</b>.","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"Le visionneur de  fichiers journaux offre la possibilité de diagnostiquer les journaux d'applications ainsi que d'ouvrir un dossier d'assistance avec le service de support technique de Red Hat, «  Red Hat Global Support Services » (Red Hat GSS).","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"La page que vous recherchez n'est pas disponible ici. Elle a peut-être été déplacée, supprimée, ou son nom et son adresse ont peut-être été modifiés. Il se peut également qu'elle soit temporairement indisponible en raison de problèmes techniques.","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"Le demandeur recevra un courrier électronique (sur l'adresse électronique fournie ci-dessous) avec le numéro de ticket ICE ainsi que des informations supplémentaires sur la manière de suivre sa progression.","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"Ce formulaire de soumission d'escalade de client interne peut être utilisé par n'importe quel employé de Red Hat pour obtenir le support technique de la direction sur des sujets qui requièrent une attention au-delà du processus de support technique standard. Veuillez vous rendre sur","This is your 8 digit Red Hat Support ticket number":"Ce numéro à 8 chiffres est votre ticket de support technique Red Hat","This release is now retired, please refer to the recommended FAQ prior to filing a case":"Cette version est désormais obsolète, veuillez consulter la FAQ recommandée avant d'ouvrir un dossier.","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"Ceci doit être l'adresse e-mail associée à votre identifiant de connexion au Portail Client Red Hat ou au Centre des Partenaires Red Hat (Partner Center)","Thursday End Time:":"Heure de fermeture le jeudi :","Thursday Start Time:":"Heure d'ouverture le jeudi :","To Learn more view the":"Pour en savoir davantage, veuillez consulter","To learn more, visit the":"Pour en savoir davantage, veuillez consulter","To view a recommendation, click on it.":"Pour afficher une recommandation, veuillez cliquer dessus.","Top Solutions":"Meilleures solutions","Transcript of chat between":"Transcription de la discussion entre","Tuesday End Time:":"Heure de fermeture le mardi :","Tuesday Start Time:":"Heure d'ouverture le mardi :","Unauthorized.":"Non autorisé.","Ungrouped Case":"Dossier non groupé","Ungrouped Cases":"Dossiers non groupés","Update":"Mettre à jour","Updating Recommendations":"Mise à jour des recommandations","Upload Attachments":"Téléverser les pièces jointes","Uploading attachment...":"Téléversement de la pièce jointe en cours...","Uploading attachments...":"Téléversement des pièces jointes en cours...","User Name":"Nom d'utilisateur","User does not have permissions to set default case group.":"L'utilisateur n'a pas les permissions pour définir le groupe de dossiers par défaut.","User does not have proper credentials to manage case groups.":"L'utilisateur n'a pas les informations d'identifications appropriées pour gérer des groupes de dossiers.","Version":"Version","View Production Support Service Level Agreement":"Afficher le contrat de niveau de service (SLA) de production","Violates SLA":"Enfreint SLA","Was not able to fetch user given ssoUserName":"Impossible de récupérer l'utilisateur avec ssoUserName donné","Wednesday End Time:":"Heure de fermeture le mercredi :","Wednesday Start Time:":"Heure d'ouverture le mercredi :","Write Access":"Accès en écriture","Yes":"Oui","Yes, Submit":"Oui, confirmer","You have successfully logged out of the Red Hat Customer Portal.":"Vous vous êtes déconnecté du Portail Client Red Hat avec succès.","You must be logged in to use this functionality.":"Vous devez être connecté pour utiliser cette fonctionnalité.","Your Cases":"Vos dossiers","Your Email address":"Votre adresse électronique","Your Ice Escalation request has been sent successfully":"Votre requête d'Escalade ICE a été envoyée avec succès","Your Partner Escalation request has been sent successfully":"Votre requête d'Escalade Partenaire a été envoyée avec succès","Your Phone Number":"Votre numéro de téléphone","Your Pins":"Vos pins","Your Red Hat Contact Phone Number":"Numéro de téléphone de votre contact Red Hat","Your Red Hat Email Address":"Votre adresse électronique Red Hat","and":"et","at":"à","click here":"cliquez ici","for more information about the ICE process.":"pour obtenir des informations supplémentaires sur le processus ICE.","for more information.":"pour davantage d'informations.","{{charactersLeft}} characters left.":"{{charactersLeft}} caractères restants.","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"{{errorFileName}} ne peut être joint car sa taille est supérieure à {{errorFileSize}} Go. Veuillez utilisez FTP pour dropbox.redhat.com pour les fichiers plus volumineux.","{{noteCharactersLeft}} characters left.":"{{noteCharactersLeft}} caractères restants."});
    gettextCatalog.setStrings('it', {"(In reply to {{personName}})":"(In risposta a {{personName}})","(More info)":"(Maggiori informazioni)","* All fields are mandatory.":"* Tutti i campi sono obbligatori","* marked fields are mandatory fields.":"i campi contrassegnati con * sono obbligatori.","24x7 Contact":"Contatto 24x7","24x7 Coverage":"Copertura 24x7 (7 giorni su 7, 24 ore su 24)","24x7 Support":"Supporto 24x7","Account":"Account","Account Information":"Informazioni sull'account","Account Name":"Nome dell'account","Account Notes":"Note account","Account not found.":"Account non trovato.","Active":"Attivo","Add":"Aggiungi","Adding user {{userName}} to case.":"Aggiungere utente {{userName}} al caso.","All Attachments":"Tutti gli allegati","All Groups":"Tutti i gruppi","Already Escalated?":"Già riassegnato?","Alternate Case ID":"ID caso alternativo","Are you sure you want to change this case severity to {{severityName}}?":"Sei sicuro di voler modificare la severità di questo caso su {{severityName}}?","Are you sure you want to change this case status to {{statusName}}?":"Sei sicuro di voler modificare lo stato di questo caso su {{statusName}}?","Are you sure you want to close the selected cases?":"Sei sicuro di voler chiudere i casi selezionati?","Assigned to":"Assegnato a","Attach Another File":"Allega un altro file","Attach File":"Allega file","Attach Foreman logs:":"Allega log di Foreman:","Attached":"Allegato","Attached By":"Allegato da","Attached Files":"File allegati","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"L'uso dei file diagnostici e di log migliora sensibilmente il tempo necessario per la soluzione del caso. Desideri continuare senza allegare un file?","Attaching logs or other diagnostics files typically results in faster resolution.":"L'uso di altri file diagnostici e di log velocizza sensibilmente il processo di risoluzione del caso.","Available Log Files":"File di log disponibili","BACK":"INDIETRO","BREACH":"VIOLAZIONE","Back":"Indietro","Based on your description, here are some possible solutions":"In base alla descrizione fornita abbiamo trovato alcune probabili soluzioni","Breached by {{breachTime}}":"Violato da {{breachTime}}","Breaching in {{breachTime}}":"Violato {{breachTime}}","Bugzilla Number":"Numero bugzilla ","Bugzilla Tickets":"Ticket di bugzilla","Bugzillas":"Bugzilla","Business Hours":"Orario lavorativo","CASE {{CaseService.kase.case_number}}":"CASO {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"CASO {{caseNumber}}","CREATE A NEW SUPPORT CASE":"CREA UN NUOVO CASO CON IL SUPPORTO TECNICO","Cancel":"Cancella","Case  {{caseNumber}} successfully closed.":"Caso  {{caseNumber}} chiuso con successo.","Case Bugzillas":"Bugzilla del caso","Case Description":"Descrizione del caso","Case Detail":"Dettagli caso","Case Discussion":"Discussione del caso","Case Escalations":"Escalation del caso","Case Group":"Gruppo casi","Case Group (Optional)":"Gruppo casi (Facoltativo)","Case Group Name:":"Nome gruppo casi:","Case Group:":"Gruppo casi:","Case History":"Cronologia caso","Case Information":"Informazioni sul caso","Case Name":"Nome caso","Case Overview":"Panoramica caso","Case Owner (A-Z)":"Proprietario del caso (A-Z)","Case Owner (Z-A)":"Proprietario del caso (Z-A)","Case Resolution":"Soluzione caso","Case Summary":"Sommario caso","Case Type":"Tipo di caso","Case group successfully updated.":"Gruppo casi aggiornato con successo.","Case severity was changed.":"La severità del caso è stata modificata.","Case status was changed.":"Lo stato del caso è stato modificato.","Case users successfully updated.":"Utenti caso aggiornati con successo.","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"Caso {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"Caso {{caseNumber}} chiuso con successo.","Chat Offline":"Avvia una chat offline","Chat with Support":"Avvia una chat con il supporto","Choose File(s) To Attach:":"Seleziona i fila da allegare:","Close":"Chiudi","Close Case":"Chiudi caso","Close messages":"Chiudi i messaggi","Closed":"Chiuso","Closed Support Cases":"Casi con il supporto chiusi","Closing Cases.":"Chiusura caso.","Closing cases.":"Chiusura casi.","Comment:":"Commento:","Create Case Group":"Crea un gruppo casi","Create New Case Group":"Crea un nuovo gruppo casi","Create a New Support Case":"Crea un nuovo caso con il supporto tecnico","Created By":"Creata da","Created by {{case.created_by}} on {{case.created_date}}":"Creato da {{case.created_by}} il {{case.created_date}}","Creating Ice Escalation request .....":"Creazione richiesta Ice Escalation in corso.....","Creating Partner Escalation request .....":"Creazione richiesta per un Partner Escalation in corso...","Creating case...":"Creazione caso in corso...","Creating group {{groupName}}...":"Creazione gruppo {{groupName}}...","Customer":"Cliente","Customer Account Number":"Numero account cliente","Customer Contact Email":"email cliente","Customer Contact Name":"Nome di contatto del cliente","Customer Contact Number":"Numero contatto del cliente","Customer GEO":"Cliente GEO","Delete":"Cancella","Delete Group":"Elimina gruppo","Deleting attachment: {{attachmentName}}":"Rimozione allegato: {{attachmentName}}","Description":"Descrizione","Diagnose":"Diagnosi","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"Potrebbero essere disponibili opzioni con livelli di assistenza differenti a seconda delle sottoscrizioni dell'account. Il livello di assistenza determina il tipo di risposta prevista per la richiesta di supporto.","Discard Changes":"Scarta le modifiche","Discussion":"Discussione","Edit":"Modifica","Email address is incorrect":"L'indirizzo email non è corretto","Entitlement Information":"Informazioni entitlement","Environment":"Ambiente","Error: Failed to upload attachment.":"Errore: Impossibile caricare l'allegato.","Error: Failed to upload attachment. Message: {{errorMessage}}":"Errore: Impossibile caricare l'allegato. Messaggio: {{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"Errore: Impossibile caricare l'allegato. Messaggio:{{errorMessage}}","Escalations":"Escalation","Expectation":"Prospettiva","Export":"Esporta","Export as CSV":"Esporta come CSV","Exporting CSV...":"Esportazione CSV in corso...","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"Impossibile caricare l'allegato {{attachmentName}} al caso {{caseNumber}}: {{errorMessage}}","File description":"Descrizione file","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"I nomi dei file sono limitati a 80 caratteri. La dimensione massima del file come allegato è di 1 GB. Per file più grandi usare FTP per dropbox.redhat.com. ","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"Archiviato il {{CaseService.kase.created_date}} da {{CaseService.kase.contact_name}}","Filename":"Nome del file","Find My Account Number":"Trova il numero del mio account","First Name":"Nome","For example: 1-888-467-3342":"Per esempio: 1-888-467-3342","Friday End Time:":"Venerdì-Orario termine:","Friday Start Time:":"Venerdì-Orario d'inizio:","GSS ICE FAQ":"GSS ICE FAQ","GSS ICE Form":"Modulo GSS ICE","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"È in corso un processo di miglioramento del processo ICE attraverso l'uso di email da parte del GSS. Consulta questo spazio per maggiori informazioni.","Get faster results.":"Ottieni risultati più velocemente.","Group Name:":"Nome del gruppo:","Group Users:":"Utenti del gruppo:","Handpicked For You":"Scelto per te","Highest Severity":"Severità più alta","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"Se questo modulo non funziona invia un ticket a helpdesk@redhat.com, indicando il problema con il GSS Ticketing e il modulo ICE","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"Se questa è una richiesta di informazioni e desideri che un nostro rappresentante ti contatti per discutere di questo problema.","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"Se richiedi la verifica dell'account in relazione ad un problema/ticket specifico, o una serie di problemi/ticket, oppure se desideri fare un reclamo generico","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"Se credi di essere in possesso dei permessi per visualizzare questa risorsa <a href=\"/support/contact/customerService.html\">contatta il Servizio clienti</a> per assistenza. Il tuo login di Red Hat potrebbe non essere associato con l'account corretto per la tua organizzazione, oppure è presente un problema con la tua sottoscrizione. In ogni caso il Servizio clienti sará in grado di aiutarti a risolvere questo problema.","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"Se ritieni che il problema si sia aggravato o che il caso debba essere classificato con una priorità più elevata, fornisci un commento dettagliato, e il caso in questione verrà esaminato da un responsabile del supporto.","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"Se desideri ancora aprire un nuovo caso con il supporto, seleziona ' Apri un nuovo caso con il supporto'. Così facendo il nuovo caso verrà popolato con la sezione del log precedentemente selezionato.","Internal Priority":"Priorità interna","Internal Status":"Stato interno","Is Public:":"È pubblico:","Issue Description":"Descrizione problema","Last Modified By":"Ultima modifica","Last Name":"Cognome","Last Updated By":"Ultimo aggiornamento ","Learn More":"Maggiori informazioni","Learn more":"Maggiori informazioni","Life of Case":"Ciclo del caso","Loading cases...":"Caricamento casi in corso...","Locating top solutions":"Individuazione soluzioni migliori","Log File Viewer":"Visualizzatore file di log","Log In":"Accedi","Log Out":"Esci","Logged into the Red Hat Customer Portal as":"Accesso eseguito nel Portale clienti di Red Hat come","Logs":"Log","Lowest Severity":"Severità più bassa","MISSING SBT. Entitlement status: {{entitlementStatus}}":"SBT MANCANTE. Stato entitlement: {{entitlementStatus}}","Manage Case Groups":"Gestisci Gruppi casi","Manage Default Case Groups":"Gestisci Gruppi casi predefiniti","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"Modificato da {{case.last_modified_by}} il {{case.last_modified_date}}","Monday End Time:":"Lunedì-Orario termine:","Monday Start Time:":"Lunedì-Orario d'inizio:","My Cases":"I miei casi","N/A":"N/A","NEXT":"SUCCESSIVO","NONE":"NONE","NOT BREACHED":"NON VIOLATO","Name":"Nome","Need to raise a concern to Red Hat Support management?":"Desideri segnalare un problema ai responsabili del supporto di Red Hat?","Negotiated Entitlement Process":"Processo entitlement negoziato","Newest Date Created":"Ultimissima data creata","Newest Date Modified":"Data ultima modifica","Newest to Oldest":"Dal più recente al meno recente","No":"No","No Files were attached to your case.":"Nessun file è stato allegato al tuo caso.","No attachments added":"Nessun allegato aggiunto","No cases found with given filters.":"Nessun caso trovato con il filtro usato.","No cases found.":"Nessun caso trovato.","No groups found.":"Nessun gruppo trovato.","No linked bugzillas":"Nessun bugzilla collegato","No match found":"Nessun risultato trovato","No solutions found.":"Nessuna soluzione trovata.","No url roles or user roles found.":"Nessun ruolo url o ruolo utente trovato. ","No, Go Back":"No, torna indietro","Not Found":"Non trovata","Not Logged into the Red Hat Customer Portal":"Accesso non eseguito nel Portale clienti di Red Hat come","Note:":"Nota Bene:","Notes:":"Nota Bene:","Number of Open Cases":"Numero casi aperti","Oldest Date Created":"Data più vecchia creata","Oldest Date Modified":"Data modifica più vecchia","Oldest to Newest":"Dal meno recente al più recente","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"Dopo aver inviato la richiesta e creato il ticket ICE nel sistema di gestione dei casi del GSS, e portato all'attenzione del GSS leadership team.","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"Dopo aver selezionato il file di log sarà possibile eseguire la diagnosi di qualsiasi parte del file selezionando il pulsante 'Diagnostica Red Hat'. Così facendo potrai visualizzare le soluzioni e gli articoli rilevanti del Red Hat Knowledge base.","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"Dopo l'invio di una richiesta verrà aperto un caso per il passaggio ad un livello superiore (partner escalation case) con il GSS. Così facendo verrà eseguita anche una notifica al GSS leadership team. Successivamente riceverai una email all'indirizzo di posta elettronica fornito qui di seguito, insieme al numero del partner escalation case e alle informazioni aggiuntive su come controllare lo stato della richiesta di supporto.","Open":"Apri","Open New Case":"Apri un nuovo caso","Open Support Cases":"Apri i casi di supporto","Open a New Support Case":"Apri un nuovo caso con il supporto tecnico","Open and Closed":"Aperti e chiusi","Open and Closed Support Cases":"Casi di supporto chiusi e aperti","Owned by {{case.contact_name}}":"Posseduto da {{case.contact_name}}","Owner":"Proprietario","Owner Information":"Informazioni sul proprietario","Password":"Password","Please":"Per favore ","Please Add File Description":"Aggiungere una descrizione del file","Please Select the Machine":"Selezionare la macchina","Please check the requestor email address":"Controllare l'indirizzo di posta elettronica del richiedente","Please note, contents of this field are not visible to Red Hat Support professionals.":"Nota bene, i contenuti di questo campo non sono visibili al personale di supporto di Red Hat.","Please provide as much detail as possible to help us understand the issue, for example:":"Fornire più informazioni possibili per aiutarci a capire la natura del problema, per esempio:","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"Fornire più informazioni possibili per aiutarci a capire la natura del problema, per esmpio: Il motivo dell'escalation, il contesto, la situazione e il tipo di supporto avuto in passato","Please provide as much information as possible in the form.":"Fornisci il maggior numero di informazioni possibile nell'apposito modulo.","Please provide as much information/detail as possible in the form.":"Fornisci il maggior numero di informazioni possibile nell'apposito modulo.","Please provide expectations and desired outcomes from yourself and from the customer":"Si prega di fornire le proprie aspettative e il risultato finale, anche quelli per il cliente","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"Se possibile richiedere il numero dell'account dall'utente, in caso contrario usare il numero dell'account di Red Hat. Questo numero è disponibile selezionando il nome utente nell'angolo in alto sulla destra della pagina.","Post":"Invia ","Priority Customer Support Routing":"Priorità direzionamento supporto del cliente","Private":"Privata","Private Notes":"Note private","Product":"Prodotto","Product Version":"Versione del prodotto","Production Support Service Level Agreement":"Contratto livello di servizio per il supporto del prodotto","Read Access":"Accesso per la lettura","Reason for the escalation, the business context, the competitive situation, past support experience":"Il motivo dell'escalation, il contesto, la situazione e il tipo di supporto avuto in passato","Recommendations":"Consigli","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"Red Hat Access facilita la soluzione dei problemi, il processo di diagnosi e l'interazione con Red Hat tramite il Portale clienti. Per accedere alle risorse del Portale clienti è necessario inserire le credenziali valide.","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"Le credenziali del Portale clienti di Red Hat differiscono da quelle usate per l'accesso a questo prodotto.","Red Hat Diagnose":"Diagnostica Red Hat","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"Red Hat Global Support Services (GSS) e Red Hat Global Partner Enablement hanno creato il Partner Escalation. Il Partner Escalation permette ai nostri partner di aumentare il livello di assistenza di tutti i casi non risolti o di tipo mission critical, passandoli alla leadership del GSS. Questo processo faciliterà la gestione delle problematiche e fornisce al tempo stesso un metodo per la loro risoluzione.","Red Hat Login":"Login di Red Hat","Red Hat Support Severity Level Definitions":"Definizioni livello di severità del supporto di Red Hat","Red Hat Support Ticket Number":"Numero ticket per il supporto di Red Hat","Refining top solutions":"Individuazione soluzioni migliori","Reply":"Rispondi","Request Management Escalation":"Richiesta aumento prioritá livello Manager","Request escalation":"Richiesta escalation","Requestor":"Richiedente","Resolution":"Risoluzione","SBR Group":"Gruppo SBR","SBT":"SBT","SBT State":"Stato SBT","SUPPORT CASES":"CASI CON IL SUPPORTO","Save":"Salva","Save Changes":"Salva le modifiche","Save Group":"Salva gruppo","Search":"Cerca","Search Articles and Solutions":"Cerca articoli e soluzioni","Search Cases By Number":"Cerca casi in base al numero","Search Knowledgebase Solutions":"Cerca le soluzioni del Knowledgebase","Search Solutions":"Cerca soluzioni","Search Support Case":"Cerca un caso con il supporto tecnico","Select File":"Seleziona un file","Select Log":"Seleziona log","Select a User":"Seleziona un utente","Send Email Notifications to":"Invia notifiche via email a","Send Request":"Invia richiesta","Server File(s) To Attach:":"File del server da allegare:","Severity":"Severity","Sign in":"Accedi","Sign into the Red Hat Customer Portal":"Accedi al Portale clienti di Red Hat","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"Vai alla ricerca e seleziona un file di log dall'elenco sulla sinistra e fare clic sul pulsante 'Seleziona file'.","Size":"Dimensione","Sort by":"Ordina per","Special Handling":"Gestione speciale","Start Time":"Orario d'inizio","Status":"Stato","Strategic":"Strategico","Submit":"Invia","Submit Attachment":"Invia allegato","Submit Request":"Invia una richiesta","Successfully created case number {{caseNumber}}":"Numero caso creato con successo {{caseNumber}}","Successfully created group {{groupName}}":"Gruppo creato con successo {{groupName}}","Successfully deleted attachment:{{attachmentName}}":"Cancellato con successo l'allegato:{{attachmentName}}","Successfully deleted group {{groupName}}":"Gruppo rimosso con successo {{groupName}}","Successfully deleted groups.":".Gruppi rimossi con successo.","Successfully set {{groupName}} as {{userName}}'s default group.":"Impostato con successo {{groupName}} come gruppo predefinito di {{userName}}.","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"Allegato caricato con successo {{attachmentFileName}} al caso  {{caseNumber}}","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"Allegato caricato con successo {{attachmentName}} al caso {{caseNumber}}","Successfully uploaded attachment.":"Allegato caricato con successo.","Suggested Solutions":"Soluzioni suggerite","Summary of Request":"Sommario della richiesta","Support":"Supporto","Support Level":"Livello supporto","Support Subscription Required":"Sottoscrizione di supporto necessaria","TAM":"TAM","Target Date":"Data finale","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"Le credenziali fornite sono valide, ma non sei in possesso di un <b>supporto diretto con Red Hat</b>.","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"Il visualizzatore del file di log permette di eseguire una diagnosi dei log dell'applicazione, e di aprire un caso per il supporto con il Red Hat Global Support Services.","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"La pagina che si sta cercando non è disponibile. È possibile che sia stata spostata, rimossa, rinominata o che ne sia stato modificato l'indirizzo. Oppure potrebbe essere temporaneamente non disponibile per motivi tecnici.","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"Il richiedente riceverà una email (all'indirizzo di posta elettronica fornito qui di seguito) con il numero del ticket ICE e con le informazioni aggiuntive su come controllare lo stato del problema in questione.","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"Questo modulo interno per l'invio di una richiesta di escalation del cliente, può essere usato da qualsiasi addetto di Red Hat per ottenere un supporto con un livello di gestione più elevato, rispetto al normale processo di supporto standard. Consultare il","This is your 8 digit Red Hat Support ticket number":"Questo è il numero di riferimento a 8 cifre per il supporto di Red Hat","This release is now retired, please refer to the recommended FAQ prior to filing a case":"Questa versione è stata rimossa, consultare le FAQ prima di completare una richiesta di supporto","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"Indirizzo email associato con il Portale clienti di Red Hat o con quello del Partner Center","Thursday End Time:":"Giovedì-Orario termine:","Thursday Start Time:":"Giovedì-Orario d'inizio:","To Learn more view the":"Per maggiori informazioni consultare","To learn more, visit the":"Per maggiori informazioni consultare","To view a recommendation, click on it.":"Selezionare il consiglio desiderato per poterlo visualizzare.","Top Solutions":"Soluzioni migliori","Transcript of chat between":"Trascrizione della chat tra","Tuesday End Time:":"Martedì-Orario termine:","Tuesday Start Time:":"Martedì-Orario d'inizio:","Unauthorized.":"Non autorizzato.","Ungrouped Case":"Caso non raggruppato","Ungrouped Cases":"Casi non raggruppati","Update":"Aggiorna","Updating Recommendations":"Aggiornamento consigli","Upload Attachments":"Carica allegati","Uploading attachment...":"Caricamento allegato...","Uploading attachments...":"Caricamento allegati...","User Name":"Nome utente","User does not have permissions to set default case group.":"L'utente non possiede i permessi per impostare il gruppo di casi predefinito.","User does not have proper credentials to manage case groups.":"L'utente non possiede le credenziali corrette per la gestione dei gruppi di casi.","Version":"Versione","View Production Support Service Level Agreement":"Visualizza il Contratto del livello di servizio per il supporto","Violates SLA":"Viola il SLA","Was not able to fetch user given ssoUserName":"Impossibile recuperare l'utente con ssoUserName dato","Wednesday End Time:":"Mercoledì-Orario termine","Wednesday Start Time:":"Mercoledì-Orario d'inizio:","Write Access":"Accesso in scrittura","Yes":"Si","Yes, Submit":"Si, invia","You have successfully logged out of the Red Hat Customer Portal.":"La sessione con il Portale clienti di Red Hat è stata chiusa correttamente.","You must be logged in to use this functionality.":"Per usare questa funzionalità è necessario essere registrati.","Your Cases":"I tuoi Casi","Your Email address":"Indirizzo email","Your Ice Escalation request has been sent successfully":"La richiesta per un Ice Escalation è stata inviata con successo","Your Partner Escalation request has been sent successfully":"La richiesta per un Partner Escalation è stata inviata con successo","Your Phone Number":"Numero di telefono","Your Pins":"I miei Preferiti","Your Red Hat Contact Phone Number":"Numero telefonico di Red Hat da contattare","Your Red Hat Email Address":"Indirizzo email di Red Hat","and":"e","at":"a","click here":"Fai clic qui","for more information about the ICE process.":"per maggiori informazioni sul processo ICE.","for more information.":"per maggiori informazioni.","{{charactersLeft}} characters left.":"{{charactersLeft}} caratteri rimasti.","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"impossibile allegare {{errorFileName}} poichè la dimensione è maggiore di {{errorFileSize}} GB. Usare FTP per dropbox.redhat.com se si utilizzano file più grandi.","{{noteCharactersLeft}} characters left.":"{{noteCharactersLeft}} caratteri rimasti."});
    gettextCatalog.setStrings('ja', {"(In reply to {{personName}})":"({{personName}} に対する返信)","(More info)":"(詳細情報)","* All fields are mandatory.":"* すべてのフィールドは必須です。","* marked fields are mandatory fields.":"* マークが付いたフィールドは必須フィールドです。","24x7 Contact":"24x7 のお問い合わせ先","24x7 Coverage":"24x7 対応","24x7 Support":"24x7 サポート","Account":"アカウント","Account Information":"アカウント情報","Account Name":"アカウント名","Account Notes":"アカウントメモ","Account not found.":"アカウントが見つかりません。","Active":"アクティブ","Add":"追加","Adding user {{userName}} to case.":"ケースにユーザー {{userName}} を追加しています。","All Attachments":"添付ファイル","All Groups":"すべてのグループ","Already Escalated?":"エスカレーションを行いましたか?","Alternate Case ID":"代替ケース ID","Are you sure you want to change this case severity to {{severityName}}?":"このケースの重大度を {{severityName}} に変更してもよろしいですか?","Are you sure you want to change this case status to {{statusName}}?":"このケースのステータスを {{statusName}} に変更してもよろしいですか?","Are you sure you want to close the selected cases?":"選択したケースをクローズしてもよろしいですか?","Assigned to":"担当者","Attach Another File":"別のファイルの添付","Attach File":"ファイルを添付","Attach Foreman logs:":"Foreman のログを添付:","Attached":"添付","Attached By":"作成者","Attached Files":"添付ファイル","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"ログやその他の診断ファイルを添付していただくと、解決までの時間を大幅に短縮することができます。ファイルを添付せずに継続されますか?","Attaching logs or other diagnostics files typically results in faster resolution.":"ログやその他の診断ファイルを添付していただくと、通常、解決までの時間を短縮することができます。","Available Log Files":"利用可能なログファイル","BACK":"戻る","BREACH":"違反情報","Back":"戻る","Based on your description, here are some possible solutions":"以下は、ご提供いただいた情報に基づく関連記事です。","Breached by {{breachTime}}":"違反: {{breachTime}}","Breaching in {{breachTime}}":"違反: {{breachTime}}","Bugzilla Number":"Bugzilla 番号","Bugzilla Tickets":"Bugzilla チケット","Bugzillas":"Bugzilla","Business Hours":"営業時間","CASE {{CaseService.kase.case_number}}":"ケース {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"ケース {{caseNumber}}","CREATE A NEW SUPPORT CASE":"サポートケースを新規作成","Cancel":"キャンセル","Case  {{caseNumber}} successfully closed.":"ケース  {{caseNumber}} が正しくクローズされました。","Case Bugzillas":"ケースの Bugzilla","Case Description":"ケースの説明","Case Detail":"ケースの詳細","Case Discussion":"ケースコメント","Case Escalations":"ケースのエスカレーション","Case Group":"ケースグループ","Case Group (Optional)":"ケースグループ (オプション)","Case Group Name:":"ケースグループ名:","Case Group:":"ケースグループ:","Case History":"ケース履歴","Case Information":"ケース情報","Case Name":"ケース名","Case Overview":"ケース概要","Case Owner (A-Z)":"ケース作成者 (A-Z)","Case Owner (Z-A)":"ケース作成者 (Z-A)","Case Resolution":"ケースの解決策","Case Summary":"ケース要約","Case Type":"ケースタイプ","Case group successfully updated.":"ケースグループが正常に更新されました。","Case severity was changed.":"ケースの重大度が変更されました。","Case status was changed.":"ケースのステータスが変更されました。","Case users successfully updated.":"ケースユーザーが正常に更新されました。","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"ケース {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"ケース {{caseNumber}} が正しくクローズされました。","Chat Offline":"オフラインのチャット","Chat with Support":"サポート担当者とチャットする","Choose File(s) To Attach:":"添付するファイルの選択:","Close":"クローズ","Close Case":"ケースをクローズ","Close messages":"メッセージを閉じる","Closed":"クローズ","Closed Support Cases":"件のサポートケース (クローズ)","Closing Cases.":"ケースをクローズしています。","Closing cases.":"ケースをクローズしています。","Comment:":"コメント:","Create Case Group":"ケースグループの作成","Create New Case Group":"ケースグループの新規作成","Create a New Support Case":"サポートケースを新規作成","Created By":"作成:","Created by {{case.created_by}} on {{case.created_date}}":"作成者: {{case.created_by}} 作成日: {{case.created_date}}","Creating Ice Escalation request .....":"ICE エスカレーションリクエストの作成中 .....","Creating Partner Escalation request .....":"パートナーエスカレーションリクエストの作成中 .....","Creating case...":"ケースの作成中...","Creating group {{groupName}}...":"グループ {{groupName}} の作成中...","Customer":"お客様","Customer Account Number":"お客様のアカウント番号","Customer Contact Email":"お客様の連絡先メール","Customer Contact Name":"お客様側の担当者","Customer Contact Number":"お客様の連絡先","Customer GEO":"お客様の地域","Delete":"削除","Delete Group":"グループの削除","Deleting attachment: {{attachmentName}}":"添付ファイルの削除中: {{attachmentName}}","Description":"説明","Diagnose":"診断","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"お使いのアカウントのサブスクリプションで利用できるサポートレベルの別のオプションがあります。サポートレベルによって、サポートケースの応答タイプが異なります。","Discard Changes":"変更を破棄","Discussion":"コメント","Edit":"編集","Email address is incorrect":"メールアドレスが正しくありません","Entitlement Information":"エンタイトルメント情報","Environment":"環境","Error: Failed to upload attachment.":"エラー: 添付ファイルをアップロードできません。","Error: Failed to upload attachment. Message: {{errorMessage}}":"エラー: 添付ファイルをアップロードできません。メッセージ: {{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"エラー: 添付ファイルをアップロードできません。メッセージ:{{errorMessage}}","Escalations":"エスカレーション","Expectation":"期待される内容","Export":"エクスポート","Export as CSV":"CSV でエクスポート","Exporting CSV...":"CSV をエクスポート中...","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"添付ファイル {{attachmentName}} をケース {{caseNumber}} にアップロードできません: {{errorMessage}}","File description":"ファイルの説明","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"ファイル名は 80 文字未満にしてください。Web にアップロードする添付ファイルの最大サイズは 1 GB です。それ以上の場合は、FTP で dropbox.redhat.com にアップロードしてください。","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"作成日: {{CaseService.kase.created_date}} 作成者: {{CaseService.kase.contact_name}}","Filename":"ファイル名","Find My Account Number":"アカウント番号の検索","First Name":"名","For example: 1-888-467-3342":"例: 1-888-467-3342","Friday End Time:":"金曜日の終了時間:","Friday Start Time:":"金曜日の開始時間:","GSS ICE FAQ":"GSS ICE FAQ","GSS ICE Form":"GSS ICE フォーム","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"現在 GSS はメールの使用による ICE プロセスの強化に取り組んでいます。このスペースで詳細情報を確認してください。","Get faster results.":"問題解決をスピードアップ: ","Group Name:":"グループ名:","Group Users:":"グループユーザー:","Handpicked For You":"このケースの参考記事","Highest Severity":"重大度が高い順","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"このフォームが何かの理由で利用できない場合は、GSS のチケット発行および ICE フォームに関する問題を指摘するチケットを helpdesk@redhat.com に送信してください。","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"ご本人またはお客様に対する情報のリクエストである場合や、この問題について弊社からの連絡を希望される場合。","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"アカウントレビューをリクエストしている場合、これが特定の問題/チケットまたは一連の問題/チケットに関連する場合、または一般的または全般的なクレームである場合","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"このリソースを閲覧する権限をお持ちであると思われる場合は、<a href=\"/support/contact/customerService.html\">カスタマーサービス</a> にお問い合わせください。ご使用の Red Hat ログインが所属されている組織のアカウントに関連付けられていないか、または、サブスクリプションに問題がある可能性があります。いずれの場合でも、カスタマーサービスがこの件について解決のお手伝いをいたします。","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"問題の重大度を上げるか、またはケースの優先度を高くする必要があると思われる場合は、詳細なコメントを入力してください。サポートマネージャーがケースを確認します。","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"サポートケースの作成をご希望の場合は、「サポートケースを新規作成」を選択します。ケースには、ログの先ほど選択した部分が自動入力されます。","Internal Priority":"内部の優先度","Internal Status":"内部のステータス","Is Public:":"公開:","Issue Description":"問題の説明","Last Modified By":"最終更新者","Last Name":"姓","Last Updated By":"最終更新者","Learn More":"詳細情報","Learn more":"詳細情報","Life of Case":"ケース有効期間","Loading cases...":"ケースの読み込み中...","Locating top solutions":"関連記事を検索しています","Log File Viewer":"ログファイルビューアー","Log In":"ログイン","Log Out":"ログアウト","Logged into the Red Hat Customer Portal as":"Red Hat カスタマーポータルにログイン中: ","Logs":"ログ","Lowest Severity":"重大度が低い順","MISSING SBT. Entitlement status: {{entitlementStatus}}":"SBT がありません。エンタイトルメントのステータス: {{entitlementStatus}}","Manage Case Groups":"ケースグループを管理","Manage Default Case Groups":"デフォルトケースグループを管理","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"更新者: {{case.last_modified_by}} 更新日: {{case.last_modified_date}}","Monday End Time:":"月曜日の終了時間:","Monday Start Time:":"月曜日の開始時間:","My Cases":"自分のケース","N/A":"該当なし","NEXT":"次へ","NONE":"なし","NOT BREACHED":"違反なし","Name":"名前","Need to raise a concern to Red Hat Support management?":"Red Hat サポートの上位の管理責任者へ問題点を報告しますか?","Negotiated Entitlement Process":"交渉済みのエンタイトルメントプロセス","Newest Date Created":"作成日が新しい順","Newest Date Modified":"変更日が新しい順","Newest to Oldest":"新しい順","No":"×","No Files were attached to your case.":"ケースにファイルが添付されていません。","No attachments added":"添付ファイルが追加されていません","No cases found with given filters.":"指定のフィルターではケースが見つかりません。","No cases found.":"ケースが見つかりません。","No groups found.":"グループが見つかりません。","No linked bugzillas":"リンクされた Bugzilla がありません","No match found":"一致するものが見つかりませんでした","No solutions found.":"ソリューションが見つかりません。","No url roles or user roles found.":"URL ロールまたはユーザーロールが見つかりません。","No, Go Back":"いいえ、戻ります","Not Found":"見つかりません","Not Logged into the Red Hat Customer Portal":"Red Hat カスタマーポータルにログインしていません","Note:":"注意:","Notes:":"注意:","Number of Open Cases":"オープン中のケースの件数","Oldest Date Created":"作成日が古い順","Oldest Date Modified":"変更日が古い順","Oldest to Newest":"古い順","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"リクエストが送信されると、ICE チケットが GSS ケース管理システムで作成され、GSS リーダーシップチームに通知されます。","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"ログファイルを選択すると、ファイルのどの部分でも診断ができるようになります。また「Red Hat 診断」ボタンをクリックすると、Red Hat ナレッジベースの関連記事やソリューションが表示されます。","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"リクエストが送信されると、パートナーエスカレーションケースが GSS で作成され、GSS リーダーシップチームに通知されます。次にご本人の以下のメールアドレス宛に、パートナーエスカレーションケース番号と進捗の追跡方法についての追加情報が記載されたメールが送信されます。","Open":"オープン","Open New Case":"ケースを新規作成","Open Support Cases":"件のサポートケース (オープン)","Open a New Support Case":"サポートケースを新規作成","Open and Closed":"オープンとクローズ","Open and Closed Support Cases":"件のサポートケース (オープンとクローズ)","Owned by {{case.contact_name}}":"作成者: {{case.contact_name}}","Owner":"作成者","Owner Information":"作成者情報","Password":"パスワード","Please":"   ","Please Add File Description":"ファイルの説明を追加してください","Please Select the Machine":"マシンを選択してください","Please check the requestor email address":"リクエスターのメールアドレスを確認してください","Please note, contents of this field are not visible to Red Hat Support professionals.":"このフィールドの内容は Red Hat サポート担当者には表示されないことに注意してください。","Please provide as much detail as possible to help us understand the issue, for example:":"Red Hat で問題を十分に理解できるよう、できるだけ詳細な情報を入力してください。例: ","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"Red Hat で問題を十分に理解できるよう、できるだけ詳細な情報を入力していただけるようお願いします。例: エスカレーションを行う理由、ビジネス上の関係、競合の状態、過去のサポート履歴など","Please provide as much information as possible in the form.":"このフォームにできるだけ詳細な情報を入力してください。","Please provide as much information/detail as possible in the form.":"このフォームにできるだけ多くの詳細情報を入力してください。","Please provide expectations and desired outcomes from yourself and from the customer":"ご本人およびお客様が期待されている対応および結果について記載してください","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"可能な場合はお客様にアカウント番号を尋ねてください。それ以外の場合は、ご自身の Red Hat アカウント番号をお使いください。アカウント番号は、本ページの右上にあるユーザー名をクリックして確認できます。","Post":"送信","Priority Customer Support Routing":"高優先度カスタマーサポートルート","Private":"プライベート","Private Notes":"プライベートメモ","Product":"製品","Product Version":"製品バージョン","Production Support Service Level Agreement":"製品サポートのサービスレベルアグリーメント","Read Access":"読み取りアクセス","Reason for the escalation, the business context, the competitive situation, past support experience":"エスカレーションを行う理由、ビジネス上の関係、競合の状態、過去のサポート履歴など","Recommendations":"参考情報","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"Red Hat Access をご利用いただくと、Red Hat カスタマーポータルから簡単に問題の自己解決や診断、お問い合わせを行うことができます。Red Hat カスタマーポータルの各種リソースにアクセスするには、ポータルへの有効なログイン情報を入力してください。","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"Red Hat カスタマーポータルのログイン情報は、この製品のログインに使用する認証情報とは異なります。","Red Hat Diagnose":"Red Hat 診断","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"Red Hat Global Support Services (GSS) および Red Hat Global Partner Enablement では、解決されていないサポートケースやミッションクリティカルなケースをパートナーの方々より GSS リーダーシップチームにエスカレーションできるパートナーエスカレーションを設置しています。このプロセスにより、お客様の問題を解決に向けてより効果的に管理していくことができます。","Red Hat Login":"Red Hat ログイン","Red Hat Support Severity Level Definitions":"Red Hat サポート重大度レベルの定義","Red Hat Support Ticket Number":"Red Hat サポートチケット番号","Refining top solutions":"関連記事の絞り込み","Reply":"返信","Request Management Escalation":"マネージメントエスカレーションをリクエスト","Request escalation":"エスカレーションを要求","Requestor":"リクエスター","Resolution":"解決方法","SBR Group":"SBR グループ","SBT":"SBT","SBT State":"SBT の状態","SUPPORT CASES":"サポートケース","Save":"保存","Save Changes":"変更を保存","Save Group":"グループの保存","Search":"検索","Search Articles and Solutions":"記事およびソリューションの検索","Search Cases By Number":"ケースの検索 (番号順)","Search Knowledgebase Solutions":"ナレッジベース記事の検索","Search Solutions":"記事の検索","Search Support Case":"サポートケースの検索","Select File":"ファイルの選択","Select Log":"ログの選択","Select a User":"ユーザーの選択","Send Email Notifications to":"通知メールの送信先","Send Request":"リクエストの送信","Server File(s) To Attach:":"添付するサーバーファイル:","Severity":"重大度","Sign in":"サインイン","Sign into the Red Hat Customer Portal":"Red Hat カスタマーポータルにサインインします","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"左側の一覧からログファイルに移動してファイルを選択し、「ファイルの選択」ボタンをクリックするだけです。","Size":"サイズ","Sort by":"並び替え","Special Handling":"特別な処理","Start Time":"開始時間","Status":"ステータス","Strategic":"戦略","Submit":"送信","Submit Attachment":"添付ファイルの送信","Submit Request":"リクエストの送信","Successfully created case number {{caseNumber}}":"ケース番号 {{caseNumber}} が正しく作成されました","Successfully created group {{groupName}}":"グループ {{groupName}} が正しく作成されました","Successfully deleted attachment:{{attachmentName}}":"添付ファイルが正しく削除されました:{{attachmentName}}","Successfully deleted group {{groupName}}":"グループ {{groupName}} が正しく削除されました","Successfully deleted groups.":"グループが正しく削除されました。","Successfully set {{groupName}} as {{userName}}'s default group.":"{{groupName}} が {{userName}} のデフォルトグループとして正しく設定されました。","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"添付ファイル {{attachmentFileName}} がケース {{caseNumber}} に正しくアップロードされました","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"添付ファイル {{attachmentName}} がケース {{caseNumber}} に正しくアップロードされました","Successfully uploaded attachment.":"添付ファイルが正しくアップロードされました。","Suggested Solutions":"推奨される解決方法","Summary of Request":"リクエストの要約","Support":"サポート","Support Level":"サポートレベル","Support Subscription Required":"サポートのサブスクリプションが必要です。","TAM":"TAM","Target Date":"目標日","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"提供された資格情報は有効ですが、<b>Red Hat の直接サポート</b>を受ける権限がありません。","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"ログファイルビューアーは、Red Hat グローバルサポートサービス (GSS) へのサポートケースの報告機能およびアプリケーションログの診断機能を提供します。","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"お探しのページはここにありません。ページは移動または削除されたか、または名前とアドレスが変更されている可能性があります。あるいは、技術的な理由で一時的に使用できない可能性があります。","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"リクエスターに ICE チケット番号と問題の進捗の追跡方法についての追加情報を含むメールが (以下のメールアドレス宛に) 送信されます。","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"この内部カスタマーエスカレーション送信フォームは、Red Hat のサポート担当者が、標準サポートプロセス以外で通知が必要な問題の管理サポートを得るために使用されます。ICE プロセスについてさらに詳しくは、GSS ICE FAQ を参照してください。","This is your 8 digit Red Hat Support ticket number":"8 桁の Red Hat サポートチケット番号","This release is now retired, please refer to the recommended FAQ prior to filing a case":"本リリースは現在使用中止になっています。ケースを作成する前に、推奨されている FAQ を参照してください。","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"これは、ご自身の Red Hat カスタマーポータルまたはパートナーセンターのログインに関連付けられているメールアドレスになります。","Thursday End Time:":"木曜日の終了時間:","Thursday Start Time:":"木曜日の開始時間:","To Learn more view the":"詳細情報は、以下をご覧ください:","To learn more, visit the":"詳細情報は、以下をご覧ください:","To view a recommendation, click on it.":"参考情報を閲覧するには、該当の項目をクリックします。","Top Solutions":"関連記事","Transcript of chat between":"チャット内容:","Tuesday End Time:":"火曜日の終了時間:","Tuesday Start Time:":"火曜日の開始時間:","Unauthorized.":"権限がありません。","Ungrouped Case":"グループ化されていないケース","Ungrouped Cases":"グループ化されていないケース","Update":"更新","Updating Recommendations":"推奨情報を更新しています","Upload Attachments":"添付ファイルのアップロード","Uploading attachment...":"添付ファイルをアップロード中...","Uploading attachments...":"添付ファイルをアップロード中...","User Name":"ユーザー名","User does not have permissions to set default case group.":"ユーザーにはデフォルトのケースグループを設定する権限がありません。","User does not have proper credentials to manage case groups.":"ユーザーには、ケースグループを管理するための適切な資格情報がありません。","Version":"バージョン","View Production Support Service Level Agreement":"製品サポートのサービスレベルアグリーメントを表示","Violates SLA":"SLA の違反","Was not able to fetch user given ssoUserName":"ユーザーの指定 ssoUserName を取得できませんでした","Wednesday End Time:":"水曜日の終了時間:","Wednesday Start Time:":"水曜日の開始時間:","Write Access":"書き込みアクセス","Yes":"○","Yes, Submit":"はい、送信します","You have successfully logged out of the Red Hat Customer Portal.":"Red Hat カスタマーポータルから正常にログアウトしました。","You must be logged in to use this functionality.":"この機能を使用するには、ログインする必要があります。","Your Cases":"ケース","Your Email address":"ご使用のメールアドレス","Your Ice Escalation request has been sent successfully":"お客様の ICE エスカレーションリクエストが正常に送信されました","Your Partner Escalation request has been sent successfully":"パートナーエスカレーションリクエストが正常に送信されました","Your Phone Number":"電話番号","Your Pins":"ピン","Your Red Hat Contact Phone Number":"Red Hat 連絡先電話番号","Your Red Hat Email Address":"Red Hat メールアドレス","and":"および","at":"   ","click here":"こちらをクリック","for more information about the ICE process.":"ICE プロセスについての詳細情報","for more information.":"詳細情報。","{{charactersLeft}} characters left.":"{{charactersLeft}} 文字 (残りの文字数)","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"{{errorFileName}} のサイズが {{errorFileSize}} GB を超えるため、添付することができません。大きなファイルは FTP で dropbox.redhat.com にアップロードしてください。","{{noteCharactersLeft}} characters left.":"{{noteCharactersLeft}} 文字 (残りの文字数)"});
    gettextCatalog.setStrings('ko', {"(In reply to {{personName}})":"({{personName}}에 회신)","(More info)":"(상세 정보) ","* All fields are mandatory.":"* 모든 필드는 필수 입력 필드입니다.","* marked fields are mandatory fields.":"* 표시된 필드는 필수 입력 필드입니다.","24x7 Contact":"24x7 연락처","24x7 Coverage":"24x7 지원","24x7 Support":"연중무휴 24시간 지원","Account":"계정","Account Information":"계정 정보","Account Name":"계정 이름","Account Notes":"계정 메모","Account not found.":"계정을 찾을 수 없습니다. ","Active":"활성","Add":"추가 ","Adding user {{userName}} to case.":"기술 문의에 사용자 {{userName}} 추가.","All Attachments":"모든 첨부 파일","All Groups":"전체 그룹 ","Already Escalated?":"이미 에스컬레이션되었습니까?","Alternate Case ID":"대체 기술 문의 ID","Are you sure you want to change this case severity to {{severityName}}?":"이 기술 문의의 심각도를 {{severityName}}로 변경하시겠습니까?","Are you sure you want to change this case status to {{statusName}}?":"이 기술 문의의 상태를 {{statusName}}로 변경하시겠습니까?","Are you sure you want to close the selected cases?":"선택한 기술 문의를 종료하시겠습니까?","Assigned to":"할당 대상","Attach Another File":"다른 파일 첨부","Attach File":"파일 첨부","Attach Foreman logs:":"Foreman 로그 첨부:","Attached":"첨부됨  ","Attached By":"첨부자","Attached Files":"첨부된 파일 ","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"로그 및 진단 파일을 첨부하면 문제 해결 시간이 단축됩니다. 파일을 첨부하지 않고 계속 진행하시겠습니까?","Attaching logs or other diagnostics files typically results in faster resolution.":"로그 또는 진단 파일을 첨부하면 일반적으로 해결 시간이 단축됩니다.","Available Log Files":"사용 가능한 로그 파일 ","BACK":"뒤로","BREACH":"응답 시간 정보","Back":"뒤로","Based on your description, here are some possible solutions":"제공해 주신 설명에 기반하여 가능한 해결 방법은 다음과 같습니다","Breached by {{breachTime}}":"{{breachTime}} 위반","Breaching in {{breachTime}}":"{{breachTime}} 위반","Bugzilla Number":"Bugzilla 번호 ","Bugzilla Tickets":"Bugzilla 티켓 ","Bugzillas":"Bugzilla","Business Hours":"업무 시간","CASE {{CaseService.kase.case_number}}":"기술 문의 {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"기술 문의 {{caseNumber}}","CREATE A NEW SUPPORT CASE":"새 기술 문의 생성","Cancel":"취소 ","Case  {{caseNumber}} successfully closed.":"기술 문의 {{caseNumber}}이/가 성공적으로 종료되었습니다.","Case Bugzillas":"기술 문의 Bugzilla","Case Description":"기술 문의 설명","Case Detail":"기술 문의 상세 정보","Case Discussion":"기술 문의 토론 ","Case Escalations":"기술 문의 에스컬레이션","Case Group":"기술문의 그룹","Case Group (Optional)":"기술문의 그룹 (옵션)","Case Group Name:":"기술문의 그룹 이름:","Case Group:":"기술문의 그룹:","Case History":"기술 문의 내역","Case Information":"기술 문의 정보","Case Name":"기술 문의 이름","Case Overview":"기술 문의 개요","Case Owner (A-Z)":"기술 문의 소유자 (A-Z)","Case Owner (Z-A)":"기술 문의 소유자 (Z-A)","Case Resolution":"기술 문의 해결","Case Summary":"기술 문의 요약","Case Type":"기술 문의 유형","Case group successfully updated.":"기술 문의 그룹이 성공적으로 업데이트되었습니다. ","Case severity was changed.":"기술 문의 심각도가 변경되었습니다.","Case status was changed.":"기술 문의 상태가 변경되었습니다.","Case users successfully updated.":"기술 문의 사용자가 성공적으로 업데이트되었습니다. ","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"기술 문의 {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"기술 문의 {{caseNumber}}이/가 성공적으로 종료되었습니다.","Chat Offline":"오프라인 채팅 ","Chat with Support":"지원 담당자와 채팅","Choose File(s) To Attach:":"첨부할 파일 선택:","Close":"종료 ","Close Case":"기술 문의 종료","Close messages":"메세지 종료 ","Closed":"종료됨 ","Closed Support Cases":"개의 종료된 기술 문의","Closing Cases.":"기술 문의를 종료하고 있습니다.","Closing cases.":"기술 문의를 종료하고 있습니다.","Comment:":"코멘트: ","Create Case Group":"기술 문의 그룹 생성","Create New Case Group":"새 기술 문의 그룹 생성","Create a New Support Case":"새 기술 문의 생성","Created By":"작성자:","Created by {{case.created_by}} on {{case.created_date}}":"작성자: {{case.created_by}} 작성일: {{case.created_date}}","Creating Ice Escalation request .....":"ICE 에스컬레이션 요청 생성 중 .....","Creating Partner Escalation request .....":"파트너 에스컬레이션 요청 생성 중 .....","Creating case...":"기술 문의 생성 중...","Creating group {{groupName}}...":"그룹 {{groupName}} 생성 중...","Customer":"고객","Customer Account Number":"고객 계정 번호 ","Customer Contact Email":"고객의 이메일 연락처 ","Customer Contact Name":"고객 연락처 이름 ","Customer Contact Number":"고객 연락처 ","Customer GEO":"고객 GEO","Delete":"삭제 ","Delete Group":"그룹 삭제","Deleting attachment: {{attachmentName}}":"첨부 파일 삭제: {{attachmentName}}","Description":"설명 ","Diagnose":"진단 ","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"계정 서브스크립션에 따라 각각 다른 지원 수준 옵션을 사용할 수 있습니다. 지원 수준은 기술 지원 사례에 따른 응답 유형을 결정합니다.","Discard Changes":"변경 사항 취소","Discussion":"토론","Edit":"수정","Email address is incorrect":"이메일 주소가 올바르지 않습니다","Entitlement Information":"인타이틀먼트 정보","Environment":"환경 ","Error: Failed to upload attachment.":"오류: 첨부파일 업로드에 실패했습니다.","Error: Failed to upload attachment. Message: {{errorMessage}}":"오류: 첨부 파일을 업로드할 수 없습니다. 메시지: {{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"오류: 첨부 파일을 업로드할 수 없습니다. 메시지: {{errorMessage}}","Escalations":"에스컬레이션","Expectation":"기대 ","Export":"내보내기 ","Export as CSV":"CSV로 내보내기","Exporting CSV...":"CSV 내보내기...","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"첨부 파일 {{attachmentName}}을/를 기술 문의 {{caseNumber}}에 업로드할 수 없습니다: {{errorMessage}}","File description":"파일 설명 ","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"파일명은 80자 미만이어야 합니다. 웹에 업로드될 최대 첨부 파일크기는 1 GB입니다. 용량이 큰 파일은  FTP로 dropbox.redhat.com에 업로드하십시오.","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"작성일: {{CaseService.kase.created_date}} 작성자: {{CaseService.kase.contact_name}}","Filename":"파일명","Find My Account Number":"내 계정 번호 검색","First Name":"이름","For example: 1-888-467-3342":"예: 1-888-467-3342","Friday End Time:":"금요일 종료 시간:","Friday Start Time:":"금요일 시작 시간:","GSS ICE FAQ":"GSS ICE FAQ","GSS ICE Form":"GSS ICE 양식","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"현재 GSS는 이메일을 사용하여 ICE 프로세스 강화에 노력하고 있습니다. 이 기능이 사용 가능하게 되면 여기서 보다 자세한 정보를 참조하십시오.","Get faster results.":"보다 빠르게 결과를 구현할 수 있습니다.","Group Name:":"그룹 이름:","Group Users:":"그룹 사용자:","Handpicked For You":"고객을 위해 엄선","Highest Severity":"가장 높은 심각도 순","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"이 양식을 사용할 수 없는 경우 GSS 티켓 발행 및 ICE 양식 관련 문제에 대한 티켓을 helpdesk@redhat.com으로 보내주십시오.","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"사용자 또는 고객에 대한 정보 요청인 경우 및 문제에 대해 문의하기 위해 연락을 받고자 하는 경우.","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"계정 검토를 요청하는 경우, 특정 문제/티켓 또는 일련의 문제/티켓에 관련되어 있거나 일반적인 문제인 경우 ","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"이 리소스를 볼 수 있는 권한을 가지고 있는 경우 <a href=\"/support/contact/customerService.html\">고객 서비스에 문의</a>하십시오. Red Hat 로그인이 귀사에 대해 올바른 계정과 연계되어 있지 않거나, 서브스크립션에 문제가 있습니다. 어떤 경우이든, 고객 서비스가 문제 해결을 위한 도움을 드릴 수 있습니다.","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"문제가 더 심각해지거나 기술 문의 사항의 우선 순위가 더 높아야 한다고 생각되는 경우, 자세한 설명을 제공하면 지원 관리자가 검토할 것입니다.","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"기술 문의 사항을 아직 열어 두어야 할 경우 '새 기술 문의 생성'을 선택합니다. 기술 문의는 이전에 선택한 로그의 일부로 사전 작성됩니다. ","Internal Priority":"내부 우선 순위","Internal Status":"내부 상태","Is Public:":"공개:","Issue Description":"문제 설명 ","Last Modified By":"마지막 수정","Last Name":"성","Last Updated By":"최종 업데이트","Learn More":"자세한 정보 ","Learn more":"자세한 정보","Life of Case":"기술 문의 기간","Loading cases...":"기술 문의 로딩 중...","Locating top solutions":"상위 솔루션 검색 중","Log File Viewer":"로그 파일 뷰어 ","Log In":"로그인","Log Out":"로그 아웃 ","Logged into the Red Hat Customer Portal as":"Red Hat 고객 포털로 로그인 ","Logs":"로그 ","Lowest Severity":"가장 낮은 심각도 순","MISSING SBT. Entitlement status: {{entitlementStatus}}":"SBT가 누락되어 있습니다. 인타이틀먼트 상태: {{entitlementStatus}}","Manage Case Groups":"기술문의 그룹 관리","Manage Default Case Groups":"기본 기술문의 그룹 관리","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"수정자: {{case.last_modified_by}} 수정일: {{case.last_modified_date}}","Monday End Time:":"월요일 종료 시간:","Monday Start Time:":"월요일 시작 시간:","My Cases":"내 기술문의","N/A":"해당 없음 ","NEXT":"다음","NONE":"없음(NONE)","NOT BREACHED":"위반 없음","Name":"이름 ","Need to raise a concern to Red Hat Support management?":"Red Hat 지원 관리에 문제를 알려야 합니까?","Negotiated Entitlement Process":"협의된 인타이틀먼트 프로세스","Newest Date Created":"최신 날짜 생성 순","Newest Date Modified":"최신 날짜 수정 순","Newest to Oldest":"최신 항목 순","No":"아니요","No Files were attached to your case.":"기술 문의에 파일이 첨부되어 있지 않습니다.","No attachments added":"추가된 첨부 파일이 없습니다 ","No cases found with given filters.":"지정된 필터에 맞는 기술 문의 사항이 없습니다.","No cases found.":"기술 문의를 찾을 수 없습니다.","No groups found.":"그룹을 찾을 수 없습니다.","No linked bugzillas":"링크된 Bugzilla가 없습니다 ","No match found":"해당 사항이 없습니다","No solutions found.":"해결 방법을 찾을 수 없습니다. ","No url roles or user roles found.":"URL 또는 사용자 역할을 찾을 수 없습니다.","No, Go Back":"아니요, 돌아가기","Not Found":"찾을 수 없음","Not Logged into the Red Hat Customer Portal":"Red Hat 고객 포털에 로그인되어 있지 않습니다 ","Note:":"알림: ","Notes:":"알림: ","Number of Open Cases":"진행중인 기술 문의 수","Oldest Date Created":"가장 오래된 날짜 생성 순","Oldest Date Modified":"가장 오래된 날짜 수정 순","Oldest to Newest":"오래된 항목 순","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"요청이 전송되면 ICE 티켓이 GSS 기술 문의 관리 시스템에 생성되고 GSS 리더십 팀에 통지됩니다.","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"로그 파일을 선택하면 로그 파일의 모든 부분을 진단할 수 있으므로 'Red Hat 진단' 버튼을 클릭합니다. 그러면 Red Hat 지식 기반에서 관련 기사 및 솔루션이 표시됩니다. ","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"요청이 전송되면 파트너 에스컬레이션 기술 문의가 GSS에 생성되어 GSS 리더쉽 팀에 통지됩니다. 아래에 지정된 이메일 주소로 파트너 에스컬레이션 기술 문의 번호 및 진행 상황을 추적하는 방법에 대한 추가 정보가 들어 있는 이메일이 전송됩니다.","Open":"진행중","Open New Case":"새 기술 문의 생성","Open Support Cases":"개의 진행중인 기술 문의","Open a New Support Case":"새 기술 문의 생성","Open and Closed":"진행중 및 종료됨 ","Open and Closed Support Cases":"개의 진행중이거나 종료된 기술 문의","Owned by {{case.contact_name}}":"소유자:  {{case.contact_name}}","Owner":"소유자 ","Owner Information":"소유자 정보","Password":"암호 ","Please":" ","Please Add File Description":"파일 설명을 추가하십시오","Please Select the Machine":"시스템을 선택하십시오 ","Please check the requestor email address":"요청자의 이메일 주소를 확인하십시오","Please note, contents of this field are not visible to Red Hat Support professionals.":"이 필드의 내용은 Red Hat 지원 담당자가 볼 수 없음에 유의하십시오.","Please provide as much detail as possible to help us understand the issue, for example:":"문제를 이해하는데 도움이 될 수 있는 가능한 많은 세부 사항을 알려주십시오. 예:","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"예를 들어 에스컬레이션 이유, 비즈니스 상황, 경쟁 상황, 과거 지원 경험등과 같이 문제를 이해하는데 도움이 될 수 있는 가능한 많은 세부 사항을 알려주십시오. ","Please provide as much information as possible in the form.":"다음 양식에 가능한 많은 정보를 상세히 입력하십시오.","Please provide as much information/detail as possible in the form.":"다음 양식에 가능한 많은 정보를 상세히 입력하십시오.","Please provide expectations and desired outcomes from yourself and from the customer":"파트너와 고객이 기대하는 대응 및 결과를 입력하십시오 ","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"가능하면 고객에게 계정 번호를 요청하십시오. 그렇지 않을 경우 자신의 Red Hat 계정 번호를 사용하십시오. 계정 번호는 이 페이지의 오른쪽 상단 코너에 있는 사용자 이름을 클릭하면 알 수 있습니다.","Post":"게재","Priority Customer Support Routing":"Red Hat 파트너 에스컬레이션 요청 ","Private":"비공개","Private Notes":"비공개 메모","Product":"제품","Product Version":"제품 버전 ","Production Support Service Level Agreement":"제품 지원 서비스 수준 약관","Read Access":"읽기 액세스","Reason for the escalation, the business context, the competitive situation, past support experience":"에스컬레이션 이유, 비즈니스 상황, 경쟁 상태, 과거 지원 경험등","Recommendations":"권장 사항 ","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"Red Hat Access를 사용하여 문제를 직접 해결하고, 문제를 진단하거나 Red Hat  고객 포털을 통해 보다 쉽게 지원 문의할 수 있습니다. Red Hat 고객 포털 리소스에 액세스하려면 유효한 포털 인증을 입력해야 합니다. ","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"Red Hat 고객 포털 인증은 제품에 로그인하는데 사용되는 인증과 다릅니다.","Red Hat Diagnose":"Red Hat 진단","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"Red Hat Global Support Services (GSS) 및 Red Hat Global Partner Enablement에서는 전략적 파트너를 활성화하여 GSS 리더쉽 팀에 해결되지 않은 지원 사례 및 미션 크리티컬한 고객 지원 사례를 에스컬레이션할 수 있는 파트너 에스컬레이션을 설립하였습니다. 이러한 프로세스를 통해 Red Hat은 고객의 문제를 보다 더 용이하게 관리하고 문제를 해결하기 위한 방법을 제공합니다.","Red Hat Login":"Red Hat 로그인","Red Hat Support Severity Level Definitions":"Red Hat 지원 심각도 수준 정의","Red Hat Support Ticket Number":"Red Hat 지원 티켓 번호 ","Refining top solutions":"상위 솔루션 검색","Reply":"회신","Request Management Escalation":"관리 에스컬레이션 요청","Request escalation":"에스컬레이션 요청","Requestor":"요청자","Resolution":"해결 방법 ","SBR Group":"SBR 그룹","SBT":"SBT","SBT State":"SBT 상태","SUPPORT CASES":"기술 문의","Save":"저장","Save Changes":"변경 사항 저장 ","Save Group":"그룹 저장","Search":"검색 ","Search Articles and Solutions":"문서 및 해결 방법 검색 ","Search Cases By Number":"번호에 따라 기술 문의 검색","Search Knowledgebase Solutions":"지식 베이스 솔루션 검색","Search Solutions":"솔루션 검색","Search Support Case":"기술 문의 검색 ","Select File":"파일 선택 ","Select Log":"로그 선택","Select a User":"사용자 선택","Send Email Notifications to":"이메일 통지 전송","Send Request":"요청 전송","Server File(s) To Attach:":"첨부할 서버 파일: ","Severity":"심각도","Sign in":"로그인 ","Sign into the Red Hat Customer Portal":"Red Hat 고객 포털로 로그인 ","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"왼쪽에 있는 목록으로 이동하여 로그 파일을 선택한 후 '파일 선택' 버튼을 클릭합니다.","Size":"크기 ","Sort by":"정렬 기준","Special Handling":"특수 처리","Start Time":"시작 시간 ","Status":"상태","Strategic":"전략","Submit":"보내기","Submit Attachment":"첨부 파일 보내기","Submit Request":"요청 보내기","Successfully created case number {{caseNumber}}":"기술 문의 번호 {{caseNumber}}이/가 성공적으로 생성되었습니다 ","Successfully created group {{groupName}}":"그룹 {{groupName}}을/를 성공적으로 생성했습니다","Successfully deleted attachment:{{attachmentName}}":"첨부파일을 성공적으로 삭제했습니다:{{attachmentName}}","Successfully deleted group {{groupName}}":"그룹 {{groupName}}을/를 성공적으로 삭제했습니다 ","Successfully deleted groups.":"그룹을 성공적으로 삭제했습니다 ","Successfully set {{groupName}} as {{userName}}'s default group.":"{{groupName}}을/를 {{userName}}의 기본 그룹으로 올바르게 설정했습니다.","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"첨부 파일 {{attachmentFileName}}을/를 기술 문의 {{caseNumber}}에 성공적으로 업로드했습니다","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"첨부 파일 {{attachmentName}}을/를 기술 문의 {{caseNumber}}에 성공적으로 업로드했습니다","Successfully uploaded attachment.":"첨부 파일을 성공적으로 업로드했습니다.","Suggested Solutions":"권장 해결 방법","Summary of Request":"요청 요약 ","Support":"지원 ","Support Level":"지원 수준 ","Support Subscription Required":"지원 서브스크립션 필요","TAM":"TAM","Target Date":"목표 날짜","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"입력한 자격 증명은 유효하나, <b>Red Hat의 직접적인 지원</b>은 제공되지 않습니다.","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"로그 파일 뷰어는 Red Hat  글로벌 지원 서비스 (GSS)를 통해 기술 지원 사항을 저장할 수 있는 기능과 함께 애플리케이션을 진단할 수 있는 기능을 제공합니다.","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"찾고 계신 페이지가 없습니다. 이동 또는 삭제되었거나 이름 및 주소가 변경되었을 수 있습니다. 또는 기술적인 원인으로 일시적으로 사용하지 못하는 것일 수 도 있습니다. ","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"요청자에게 ICE 티켓 번호 및 문제의 진행 상황을 추적하는 방법에 대한 추가 정보가 들어 있는 이메일이 (아래에 지정된 이메일 주소로) 전송됩니다.","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"내부 고객의 에스컬레이션 제출 양식은  표준 지원 프로세스 이외의 주의를 요하는 문제에 대한 관리 지원을 위해 Red Hat 지원 담당자에 의해 사용됩니다.","This is your 8 digit Red Hat Support ticket number":"8 자리의 Red Hat 지원 티켓 번호입니다 ","This release is now retired, please refer to the recommended FAQ prior to filing a case":"이 릴리즈는 현재 만료되었습니다. 기술 문의를 작성하기 전 FAQ를 참조하십시오.","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"이는 귀하의 Red Hat 고객 포털 또는 파트너 센터 로그인에 연결된 이메일 주소여야 합니다.","Thursday End Time:":"목요일 종료 시간:","Thursday Start Time:":"목요일 시작 시간:","To Learn more view the":"자세한 내용은 다음에서 확인하십시오:","To learn more, visit the":"자세한 내용은 다음에서 확인하십시오: ","To view a recommendation, click on it.":"권장 사항을 확인하려면 해당 항목을 클릭합니다.","Top Solutions":"상위 솔루션","Transcript of chat between":"채팅 내용","Tuesday End Time:":"화요일 종료 시간:","Tuesday Start Time:":"화요일 시작 시간:","Unauthorized.":"인증되지 않았습니다.","Ungrouped Case":"그룹화되지 않은 기술문의","Ungrouped Cases":"그룹화되지 않은 기술문의","Update":"업데이트 ","Updating Recommendations":"권장 사항 업데이트 중","Upload Attachments":"첨부 파일 업로드 ","Uploading attachment...":"첨부 파일 업로드 중...","Uploading attachments...":"첨부 파일 업로드 중...","User Name":"사용자 이름","User does not have permissions to set default case group.":"사용자에게는 기본 기술 문의 그룹 설정 권한이 없습니다. ","User does not have proper credentials to manage case groups.":"사용자에게는 기술 문의 그룹을 관리할 적절한 인증이 없습니다. ","Version":"버전 ","View Production Support Service Level Agreement":"제품 지원 서비스 수준 약관 보기 ","Violates SLA":"SLA 위반","Was not able to fetch user given ssoUserName":"사용자에 지정된 ssoUserName을 가져올 수 없습니다","Wednesday End Time:":"수요일 종료 시간:","Wednesday Start Time:":"수요일 시작 시간:","Write Access":"쓰기 액세스","Yes":"예","Yes, Submit":"예, 보내기","You have successfully logged out of the Red Hat Customer Portal.":"Red Hat 고객 포털에서 성공적으로 로그아웃했습니다. ","You must be logged in to use this functionality.":"이 기능을 사용하려면 로그인해야 합니다. ","Your Cases":"기술 문의","Your Email address":"사용자 이메일 주소","Your Ice Escalation request has been sent successfully":"귀하의 ICE 에스컬레이션 요청이 성공적으로 전송되었습니다","Your Partner Escalation request has been sent successfully":"파트너 에스컬레이션 요청이 성공적으로 전송되었습니다 ","Your Phone Number":"전화 번호 ","Your Pins":"사용자 핀","Your Red Hat Contact Phone Number":"Red Hat 전화 번호","Your Red Hat Email Address":"Red Hat 이메일 주소","and":"및 ","at":"에 ","click here":"여기를 클릭","for more information about the ICE process.":"ICE 프로세스에 대한 자세한 정보","for more information.":"상세 정보","{{charactersLeft}} characters left.":"{{charactersLeft}} 문자가 남아 있습니다.","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"{{errorFileName}} 용량이 {{errorFileSize}} GB를 초과하기 때문에 첨부할 수 없습니다. 용량이 큰 파일은  FTP로 dropbox.redhat.com에 업로드하십시오.","{{noteCharactersLeft}} characters left.":"{{noteCharactersLeft}} 문자가 남아 있습니다."});
    gettextCatalog.setStrings('pt', {"(In reply to {{personName}})":"(Em resposta ao {{personName}})","(More info)":"(Mais Informações)","* All fields are mandatory.":"* Todos os campos são obrigatórios.","* marked fields are mandatory fields.":"* os campos marcados são obrigatórios.","24x7 Contact":"Contato 7x24","24x7 Coverage":"Cobertura 7x24","24x7 Support":"Suporte 7x24","Account":"Conta","Account Information":"Informações da conta","Account Name":"Nome da conta","Account Notes":"Notas de Conta","Account not found.":"A conta não foi encontrada.","Active":"Ativo","Add":"Adicionar","Adding user {{userName}} to case.":"Adicionar usuário {{userName}} ao caso.","All Attachments":"Todos os Anexos","All Groups":"Todos os Grupos","Already Escalated?":"Já foi escalado?","Alternate Case ID":"ID do Caso Alternativo","Are you sure you want to change this case severity to {{severityName}}?":"Você tem certeza de que deseja alterar a gravidade deste caso para {{severityName}}?","Are you sure you want to change this case status to {{statusName}}?":"Você tem certeza de que deseja alterar o status deste caso para {{statusName}}?","Are you sure you want to close the selected cases?":"Você tem certeza que deseja encerrar os casos selecionados?","Assigned to":"Determinado para","Attach Another File":"Anexar Outro Arquivo","Attach File":"Anexar Arquivo","Attach Foreman logs:":"Anexar logs do Foreman:","Attached":"Anexado","Attached By":"Anexado por","Attached Files":"Arquivos anexados","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"Anexar arquivos de diagnósticos e logs melhora consideravelmente o período para resolução. Você quer continuar sem anexar algum arquivo?","Attaching logs or other diagnostics files typically results in faster resolution.":"Anexar os arquivos de outros diagnósticos ou logs normalmente resulta numa resolução mais rápida. ","Available Log Files":"Arquivos de Log Disponíveis:","BACK":"RETORNAR","BREACH":"VIOLAR","Back":"Voltar","Based on your description, here are some possible solutions":"Baseado na sua descrição, aqui estão algumas soluções possíveis","Breached by {{breachTime}}":"Violado por {{breachTime}}","Breaching in {{breachTime}}":"Violando em {{breachTime}}","Bugzilla Number":"Número do Bugzilla","Bugzilla Tickets":"Tiquetes do Bugzilla","Bugzillas":"Bugzillas","Business Hours":"Horário Comercial","CASE {{CaseService.kase.case_number}}":"CASE {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"CASE {{caseNumber}}","CREATE A NEW SUPPORT CASE":"CRIAR UM NOVO CASO DE SUPORTE","Cancel":"Cancelar","Case  {{caseNumber}} successfully closed.":"Caso  {{caseNumber}} fechado com sucesso.","Case Bugzillas":"Caso Bugzillas","Case Description":"Descrição do Caso","Case Detail":"Detalhes do Caso","Case Discussion":"Discussão do Caso","Case Escalations":"Escalações do Caso","Case Group":"Grupo de Caso","Case Group (Optional)":"Grupo de Caso (Opcional)","Case Group Name:":"Nome do Grupo do Caso:","Case Group:":"Grupo do Caso:","Case History":"Histórico do Caso","Case Information":"Informação do Caso","Case Name":"Nome do Caso","Case Overview":"Visão Geral do Caso","Case Owner (A-Z)":"Proprietário do Caso (A-Z)","Case Owner (Z-A)":"Proprietário do caso  (Z-A)","Case Resolution":"Resolução do Caso","Case Summary":"Sumário do Caso","Case Type":"Tipo do Caso","Case group successfully updated.":"O grupo de caso foi atualizado com êxito.","Case severity was changed.":"Gravidade do caso foi modificada","Case status was changed.":"Status do caso foi modificado.","Case users successfully updated.":"Os usuários de caso foram atualizados com êxito.","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"Caso {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"Caso {{caseNumber}} foi fechado com sucesso.","Chat Offline":"Bate papo Offline","Chat with Support":"Bate-papo com o Suporte","Choose File(s) To Attach:":"Escolha Arquivo(s) para Anexar:","Close":"Fechar","Close Case":"Encerrar o Caso","Close messages":"Fechar Mensagens","Closed":"Encerrado","Closed Support Cases":"Casos de Suporte Encerrados","Closing Cases.":"Encerrando casos.","Closing cases.":"Encerrando casos.","Comment:":"Comentário:","Create Case Group":"Criar Grupo de Caso","Create New Case Group":"Criar novo Grupo de Caso","Create a New Support Case":"Criar um Novo Caso de Suporte","Created By":"Criado por","Created by {{case.created_by}} on {{case.created_date}}":"Criado por {{case.created_by}} em {{case.created_date}}","Creating Ice Escalation request .....":"Criando a solicitação de Escalonamento Ice ...","Creating Partner Escalation request .....":"Criando a solicitação de Escalonamento de Parceiros ...","Creating case...":"Criando o caso...","Creating group {{groupName}}...":"Criando grupo {{groupName}}...","Customer":"Cliente","Customer Account Number":"Número de Conta do Cliente","Customer Contact Email":"E-mail de Contato do Cliente","Customer Contact Name":"Nome do contato do cliente","Customer Contact Number":"Número de Contato do Cliente","Customer GEO":"GEO do Cliente","Delete":"Remover","Delete Group":"Excluir Grupo","Deleting attachment: {{attachmentName}}":"Remover Anexo: {{attachmentName}}","Description":"Descrição","Diagnose":"Diagnóstico","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"Diferentes opções de nível de suporte podem estar disponíveis baseadas em suas subscrições da conta. O seu nível de suporte determina o tipo de responsabilidade que você pode esperar para seu caso de suporte.","Discard Changes":"Descartar Alterações","Discussion":"Discussão","Edit":"Editar","Email address is incorrect":"O endereço de email é incorreto","Entitlement Information":"Informação de Qualificações","Environment":"Ambiente","Error: Failed to upload attachment.":"Erro: Falha ao carregar o anexo.","Error: Failed to upload attachment. Message: {{errorMessage}}":"Erro: Falha ao carregar anexo. Mensagem {{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"Erro: Falha ao carregar o anexo. Mensagem: {{errorMessage}}","Escalations":"Escalações","Expectation":"Expectativa","Export":"Exportar","Export as CSV":"Exportar como um CSV","Exporting CSV...":"Exportando CSV...","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"Falha ao carregar o anexo  {{attachmentName}} para o caso {{caseNumber}}: {{errorMessage}}","File description":"Descrição do arquivo","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"Os nomes devem possuir menos do que 80 caracteres. O tamanho do arquivo máximo para os anexos carregados da web é de 1 GB. Por favor FTB arquivos maiores ao dropbox.redhat.com.","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"Arquivado no  {{CaseService.kase.created_date}} pelo {{CaseService.kase.contact_name}}","Filename":"Nome do Arquivo","Find My Account Number":"Encontrar o meu Número de Conta","First Name":"Primeiro Nome","For example: 1-888-467-3342":"Por exemplo: 1-888-467-3342","Friday End Time:":"Hora de término de sexta-feira:","Friday Start Time:":"Hora de início da sexta-feira:","GSS ICE FAQ":"GSS ICE FAQ","GSS ICE Form":"Formulário GSS ICE","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"O GSS está trabalhando no momento no aperfeiçoamento do processo ICE através do uso do email. Acompanhe este espaço uma vez que mais detalhes estarão disponíveis.","Get faster results.":"Obter resultados mais rápidos.","Group Name:":"Nome do Grupo:","Group Users:":"Usuários do Grupo:","Handpicked For You":"Selecionado(a) manualmente para você","Highest Severity":"Gravidade Maior","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"Caso este formulário não esteja funcionando, por favor submeta um tíquete ao helpdesk@redhat.com, informando o problema com o tíquete do GSS e o formulário ICE","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"Caso isto seja uma solicitação de sua informação ou do cliente e caso necessite que façamos contato para conversar sobre os problemas. ","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"Caso esteja solicitando uma revisão de conta, caso isto seja relacionado ao problema/tíquete específico ou uma série de problemas/tíquetes ou caso isto seja uma reclamação geral ou genérica","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"Caso você precise ter permissão para consultar este recurso, <a href=\"/support/contact/customerService.html\">entre em contato com o Atendimento ao cliente</a> para obter ajuda. Seu login da Red Hat pode não estar associado à conta correta da sua empresa ou pode ser um problema com a sua assinatura. O Atendimento ao cliente poderá ajudá-lo a solucionar qualquer um dos problemas.","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"Caso sinta que o problema ficou mais grave ou que o caso deveria ter maior prioridade, forneça um comentário detalhado, e o caso será analisado por um gerente de suporte.","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"Caso você ainda deseje abrir um caso de suporte, selecione 'Abrir um Novo Caso de Suporte'. O caso será pré-populado com a porção do log anteriormente selecionada.","Internal Priority":"Prioridade Interna","Internal Status":"Status Interno","Is Public:":"É Público:","Issue Description":"Descrição do problema","Last Modified By":"Última Modificação Por","Last Name":"Sobrenome","Last Updated By":"Atualizado por Último por","Learn More":"Saiba Mais","Learn more":"Saiba mais","Life of Case":"Vida do Caso","Loading cases...":"Carregando casos...","Locating top solutions":"Localizando soluções superiores","Log File Viewer":"Visualizador de Arquivos de Log","Log In":"Logon","Log Out":"Sair","Logged into the Red Hat Customer Portal as":"Autenticado no Red Hat Customer Portal como","Logs":"Logs","Lowest Severity":"Gravidade Menor","MISSING SBT. Entitlement status: {{entitlementStatus}}":"MISSING SBT. Status de Direitos a Serviços: {{entitlementStatus}}","Manage Case Groups":"Gerencie Grupos de Caso","Manage Default Case Groups":"Gerencie Grupos de Caso Default","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"Modificado por {{case.last_modified_by}} em {{case.last_modified_date}}","Monday End Time:":"Hora de término da segunda-feira:","Monday Start Time:":"Hora de início da segunda-feira:","My Cases":"Meus Casos","N/A":"N/A","NEXT":"Próxima","NONE":"NONE","NOT BREACHED":"NÃO VIOLADO","Name":"Nome","Need to raise a concern to Red Hat Support management?":"Precisa relatar um problema ao gerenciamento do Red Hat Suporte?","Negotiated Entitlement Process":"Processo de Direitos a Serviços Negociados","Newest Date Created":"Data Criada mais Recente","Newest Date Modified":"Data Modificada mais Recentemente","Newest to Oldest":"Do mais novo até o mais velho","No":"Não","No Files were attached to your case.":"Nenhum Arquivo anexado ao seu caso.","No attachments added":"Não foi adicionado nenhum anexo","No cases found with given filters.":"Nenhum caso foi encontrado com os filtros especificados","No cases found.":"Casos não encontrados.","No groups found.":"Nenhum grupo encontrado","No linked bugzillas":"Nenhum bugzilla conectado","No match found":"Nenhuma correspondência encontrada","No solutions found.":"Nenhuma solução encontrada.","No url roles or user roles found.":"Nenhuma função de Usuários ou funções de url foram encontradas.","No, Go Back":"Não, Voltar","Not Found":"404 Não Encontrada","Not Logged into the Red Hat Customer Portal":"Não foi autenticado no Red Hat Customer Portal","Note:":"Nota:","Notes:":"Notas:","Number of Open Cases":"Número de Casos Abertos","Oldest Date Created":"Data mais Antiga Criada","Oldest Date Modified":"Data mais Antiga Modificada","Oldest to Newest":"Do mais antigo ao mais novo","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"Uma vez que a solicitação é submetida, o tíquete ICE será levantado no sistema de gerenciamento de caso do GSS e terá a atenção da equipe de liderança do GSS.","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"Depois que você selecionou o arquivo de log, você poderá diagnosticar qualquer parte do arquivo de log e clicar no botão 'Red Hat Diagnose'. Isto irá exibir artigos relevantes e soluções de nossa base do Red Hat Knowledge.","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"Uma vez que sua solicitação for submetida, o caso de escalonamento de parceiro será aberto com  o GSS e a equipe de liderança do GSS será notificada. Então, você receberá um e-mail no endereço de e-mail fornecido abaixo  com o número do caso de escalonamento de parceiro e informação adicional de como rastrear a progressão do caso.","Open":"Abrir","Open New Case":"Abrir um Novo Caso","Open Support Cases":"Abrir Casos de Suporte","Open a New Support Case":"Abrir um novo Caso de Suporte","Open and Closed":"Abrir e Encerrar","Open and Closed Support Cases":"Abrir e Encerrar Casos de Suporte","Owned by {{case.contact_name}}":"Propriedade do(a)  {{case.contact_name}}:","Owner":"Proprietário","Owner Information":"Informação do Proprietário","Password":"Senha","Please":"Por favor","Please Add File Description":"Por favor Adicione a Descrição do Arquivo","Please Select the Machine":"Por favor Selecione a Máquina","Please check the requestor email address":"Por favor verifique o endereço de e-mail do solicitante","Please note, contents of this field are not visible to Red Hat Support professionals.":"Por favor note que os conteúdos deste campo não estão visíveis aos profissionais do Red Hat Support.","Please provide as much detail as possible to help us understand the issue, for example:":"Por favor forneça mais detalhes possíveis para nos ajudar a entender o problema, por exemplo:","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"Por favor forneça mais detalhes possíveis para nos ajudar a entender o problema, por exemplo: a razão do escalonamento, o contexto comercial, a situação competitiva, a experiência de suporte, etc.","Please provide as much information as possible in the form.":"Por favor forneça o maior número de informação possível no formulário.","Please provide as much information/detail as possible in the form.":"Por favor forneça o maior número de informação/detalhe possível no formulário.","Please provide expectations and desired outcomes from yourself and from the customer":"Por favor forneça as expectativas e os resultados desejados por você e seu cliente","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"Por favor solicite o número de conta do cliente caso possível. Do contrário, use o seu número de conta da Red Hat. O número de conta pode ser encontrado apenas clicando no nome do usuário no canto direito superior da página.","Post":"Postar","Priority Customer Support Routing":"Solicitação do Red Hat Partner Escalation","Private":"Privado","Private Notes":"Notas Privadas","Product":"Produto","Product Version":"Versão do Produto","Production Support Service Level Agreement":"Contrato do Nível do Serviço de Suporte de Produção","Read Access":"Acesso de Leitura","Reason for the escalation, the business context, the competitive situation, past support experience":"Razão do escalonamento, o contexto comercial, a situação competitiva, experiência de suporte anterior","Recommendations":"Recomendações","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"O Red Hat Access facilita a solução de problemas, diagnóstico de problemas pra você e nos une via Red Hat Customer Portal. Para acessar os recursos do Portal do Consumidor Red Hat, você precisa inserir as credenciais do portal válidas.","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"As credenciais do Portal do Consumidor, diferem das credenciais usadas para se autenticar neste produto.","Red Hat Diagnose":"Diagnóstico da Red Hat","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"O Red Hat Global Support Services (GSS) e Red Hat Global Partner Enablement estabeleceram um Escalonamento de Parceiros para habilitar nossa estratégia de parceiros a escalar casos de suporte de cliente não resolvidos ou de missão crítica à liderança do GSS. Este processo irá ajudá-lo e à Red Hat para melhor gerenciamento dos problemas de seus clientes e fornecer um processo para direcionamento destes problemas à resolução.","Red Hat Login":"Red Hat Login","Red Hat Support Severity Level Definitions":"Red Hat Support Severity Level Definitions","Red Hat Support Ticket Number":"Número do Tíquete do Red Hat Support","Refining top solutions":"Redefinição das soluções superiores","Reply":"Responder","Request Management Escalation":"Requisita a escalação de gerenciamento","Request escalation":"Solicitar escalonamento","Requestor":"Solicitante","Resolution":"Resolução","SBR Group":"Grupo SBR","SBT":"SBT","SBT State":"Estado do SBT","SUPPORT CASES":"CASOS DE SUPORTE","Save":"Salvar","Save Changes":"Salvar alterações","Save Group":"Salvar Grupo","Search":"Buscar","Search Articles and Solutions":"Buscar Artigos e Soluções","Search Cases By Number":"Buscar Casos por Número","Search Knowledgebase Solutions":"Pesquisar Soluções de Base de Conhecimento","Search Solutions":"Buscar Soluções","Search Support Case":"Buscar um Caso de Suporte","Select File":"Selecionar Arquivo","Select Log":"Selecionar Log","Select a User":"Selecionar um Usuário","Send Email Notifications to":"Enviar Notificações de E-mail a(o)","Send Request":"Enviar Solicitação","Server File(s) To Attach:":"Arquivo(s) do Servidor para Anexar:","Severity":"Gravidade","Sign in":"Entrar","Sign into the Red Hat Customer Portal":"Entrar no Red Hat Portal do Cliente","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"Simplesmente navegue até lá e selecione um arquivo de log a partir da lista à esquerda e clique no botão 'Selecionar Arquivo'.","Size":"Tamanho","Sort by":"Classificar por","Special Handling":"Manuseio Especial","Start Time":"Hora inicial","Status":"Estado","Strategic":"Estratégia","Submit":"Enviar","Submit Attachment":"Enviar Anexo","Submit Request":"Enviar Solicitação","Successfully created case number {{caseNumber}}":"Número de caso criado com êxito  {{caseNumber}}","Successfully created group {{groupName}}":"Grupo criado com êxito {{groupName}}","Successfully deleted attachment:{{attachmentName}}":"Anexos removidos com sucesso:{{attachmentName}}","Successfully deleted group {{groupName}}":"Grupo excluído com êxito {{groupName}}","Successfully deleted groups.":"Grupos excluídos com êxito.","Successfully set {{groupName}} as {{userName}}'s default group.":"Determinado com êxito {{groupName}} como grupo default de {{userName}}'s.","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"Anexo atualizado com sucesso {{attachmentFileName}} para o caso {{caseNumber}}","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"Anexo atualizado com sucesso {{attachmentName}} para o caso {{caseNumber}}","Successfully uploaded attachment.":"Anexo carregado com êxito.","Suggested Solutions":"Soluções Sugeridas","Summary of Request":"Sumário de Solicitações","Support":"Suporte","Support Level":"Nível de Suporte","Support Subscription Required":"Assinatura de suporte necessária","TAM":"TAM","Target Date":"Data do Alvo","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"As credenciais fornecidas são válidas, <b>mas você não possui suporte direto da Red Hat.</b>","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"O visualizador de arquivo de log fornece a habilidade para diagnosticar logs de aplicativo assim como arquivar caso de suporte com os Serviços da Red Hat Global Support.","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"A página que você está procurando não está presente. Ela pode ter sido movida, removida ou seu nome e endereço, alterado. Ela pode estar temporariamente indisponível por motivos técnicos.","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"O solicitante irá então receber um e-mail (no endereço de e-mail fornecido abaixo) com o número de tíquete do ICE e a informação adicional de como rastrear o progresso do problema.","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"Este formulário de submissão do Escalonamento do Cliente Interno pode ser usado por qualquer associado da Red Hat para obtenção de suporte de gerenciamento para problemas que requerem atenção fora do processo de suporte padrão. Por favor visite","This is your 8 digit Red Hat Support ticket number":"Este é o número de tíquete de 8 dígitos do Red Hat Support","This release is now retired, please refer to the recommended FAQ prior to filing a case":"Este lançamento está obsoleto, por favor consulte o FAQ recomendado antes de arquivar um caso","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"Isto deveria ser o endereço de email associado ao  Red Hat Customer Portal ou login do Partner Center","Thursday End Time:":"Hora de término de quinta-feira:","Thursday Start Time:":"Hora de início de quinta-feira:","To Learn more view the":"Para saber mais veja","To learn more, visit the":"Para saber mais visite o ","To view a recommendation, click on it.":"Para visualizar recomendação, clique nela;","Top Solutions":"Soluções Populares","Transcript of chat between":"Transcrição","Tuesday End Time:":"Hora de término de terça-feira:","Tuesday Start Time:":"Hora de início de terça-feira:","Unauthorized.":"Desautorizado.","Ungrouped Case":"Caso Desagrupados","Ungrouped Cases":"Casos sem Grupos","Update":"Atualizar","Updating Recommendations":"Atualizando Recomendações","Upload Attachments":"Atualizar Anexos","Uploading attachment...":"Carregando anexo...","Uploading attachments...":"Carregando anexos...","User Name":"Nome de Usuário","User does not have permissions to set default case group.":"O usuário não possui permissões para determinar o grupo de caso default. ","User does not have proper credentials to manage case groups.":"O usuário não possui credenciais apropriados para gerenciar grupos de caso.","Version":"Versão","View Production Support Service Level Agreement":"Visualizar Contrato do Nível do Serviço de Suporte de Produção","Violates SLA":"Viola o SLA","Was not able to fetch user given ssoUserName":"Não foi possível buscar usuário fornecido ssoUserName","Wednesday End Time:":"Hora de término de quarta-feira:","Wednesday Start Time:":"Hora de início de quarta-feira:","Write Access":"Acesso de Gravação","Yes":"Sim","Yes, Submit":"Sim, Enviar","You have successfully logged out of the Red Hat Customer Portal.":"Você saiu com êxito do Portal do Cliente Red Hat.","You must be logged in to use this functionality.":"Você deve estar conectado para uso desta funcionalidade.","Your Cases":"Seus Casos","Your Email address":"O seu endereço de E-mail","Your Ice Escalation request has been sent successfully":"A sua solicitação do Escalonamento Ice foi enviada com êxito","Your Partner Escalation request has been sent successfully":"A sua solicitação do escalonamento de parceiros foi enviada com êxito","Your Phone Number":"O seu número de telefone","Your Pins":"Seus Pins","Your Red Hat Contact Phone Number":"O seu Número Telefônico de Contato da Red Hat","Your Red Hat Email Address":"O seu Endereço de E-mail da Red Hat","and":"e","at":"em","click here":"clique aqui","for more information about the ICE process.":"para maiores informações sobre o processo ICE.","for more information.":"para maiores informações.","{{charactersLeft}} characters left.":"{{charactersLeft}} caracteres restantes.","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"{{errorFileName}}  não foi possível realizar o anexo uma vez que isto é maior do que {{errorFileSize}} GB. Por favor FTB arquivos maiores ao dropbox.redhat.com.","{{noteCharactersLeft}} characters left.":"{{noteCharactersLeft}} caracteres restantes."});
    gettextCatalog.setStrings('zh_CN', {"(In reply to {{personName}})":"（回复 {{personName}}）","(More info)":"（更多信息）","* All fields are mandatory.":"* 所有字段都是必填项。","* marked fields are mandatory fields.":"* 标记的字段为必填项。","24x7 Contact":"24x7 联系方式","24x7 Coverage":"24x7 覆盖","24x7 Support":"24x7 支持","Account":"帐户","Account Information":"帐户信息","Account Name":"账户名称","Account Notes":"账户注释","Account not found.":"未发现帐户。","Active":"选中","Add":"添加","Adding user {{userName}} to case.":"把用户 {{userName}} 添加到问题单中。","All Attachments":"添加附件","All Groups":"所有组","Already Escalated?":"已升级？","Alternate Case ID":"备用问题单 ID","Are you sure you want to change this case severity to {{severityName}}?":"您确定要将这个问题单的严重性改为 {{severityName}} 吗？","Are you sure you want to change this case status to {{statusName}}?":"您确定要将这个问题单的状态改为 {{statusName}} 吗？","Are you sure you want to close the selected cases?":"您确定要关闭所选问题单吗？","Assigned to":"已分配给","Attach Another File":"附加另一个文件","Attach File":"附加文件","Attach Foreman logs:":"附加 Foreman 日志：","Attached":"附加","Attached By":"附件上传者","Attached Files":"附加的文件","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"附加日志和诊断文件可大大节省解决问题所需时间。您确定不需要添加任何附件吗？","Attaching logs or other diagnostics files typically results in faster resolution.":"附加日志或其他诊断文件通常可加快解决问题的速度。","Available Log Files":"有效的日志文件","BACK":"BACK","BREACH":"BREACH","Back":"返回","Based on your description, here are some possible solutions":"根据您的描述，这里有一些可能的解决方案。","Breached by {{breachTime}}":"Breached by {{breachTime}}","Breaching in {{breachTime}}":"Breaching in {{breachTime}}","Bugzilla Number":"Bugzilla 号","Bugzilla Tickets":"Bugzilla 报告","Bugzillas":"Bugzilla","Business Hours":"办公时间","CASE {{CaseService.kase.case_number}}":"问题单 {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"问题单 {{caseNumber}}","CREATE A NEW SUPPORT CASE":"新建支持问题单","Cancel":"取消","Case  {{caseNumber}} successfully closed.":"问题单  {{caseNumber}} 已成功关闭。","Case Bugzillas":"问题单的 Bugzilla 报告","Case Description":"问题单描述","Case Detail":"问题单详情","Case Discussion":"支持案例讨论","Case Escalations":"问题单升级","Case Group":"问题单组","Case Group (Optional)":"问题单组（自选）","Case Group Name:":"问题单组名称：","Case Group:":"支持案例组：","Case History":"问题单历史记录","Case Information":"问题单信息","Case Name":"问题单名称","Case Overview":"问题单概述","Case Owner (A-Z)":"问题单所有人 (A-Z)","Case Owner (Z-A)":"问题单所有人 (Z-Z)","Case Resolution":"问题单解决","Case Summary":"问题单概述","Case Type":"问题单类型","Case group successfully updated.":"成功更新问题单组。","Case severity was changed.":"问题单的严重性被改变。","Case status was changed.":"问题单的状态被改变。","Case users successfully updated.":"成功更新问题单用户。","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"问题单 {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"问题单 {{caseNumber}} 已成功关闭。","Chat Offline":"离线互动咨询","Chat with Support":"聊天支持","Choose File(s) To Attach:":"选择要被附加的文件：","Close":"关闭","Close Case":"关闭问题单","Close messages":"关闭信息","Closed":"已关闭","Closed Support Cases":"已关闭支持问题单","Closing Cases.":"正在关闭问题单。","Closing cases.":"正在关闭问题单。","Comment:":"评论：","Create Case Group":"创建案例组","Create New Case Group":"创建新的案例组","Create a New Support Case":"创建新的支持问题单","Created By":"已创建","Created by {{case.created_by}} on {{case.created_date}}":"{{case.created_by}} 在 {{case.created_date}} 创建","Creating Ice Escalation request .....":"正在生成 Ice 升级请求......","Creating Partner Escalation request .....":"正在生成合作伙伴升级请求......","Creating case...":"正在生成问题单......","Creating group {{groupName}}...":"创建组 {{groupName}}...","Customer":"用户","Customer Account Number":"用户帐户号码","Customer Contact Email":"用户联系电子邮件","Customer Contact Name":"用户联系姓名","Customer Contact Number":"用户联系号码","Customer GEO":"用户 GEO","Delete":"删除","Delete Group":"删除组","Deleting attachment: {{attachmentName}}":"删除附件: {{attachmentName}}","Description":"描述","Diagnose":"诊断","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"可能根据您的帐户订阅可能有不同的支持等级选项。您的支持等级决定可为您的支持问题单提供的响应类型。","Discard Changes":"忽略更改","Discussion":"讨论","Edit":"编辑","Email address is incorrect":"电子邮件地址不正确","Entitlement Information":"授权信息","Environment":"环境","Error: Failed to upload attachment.":"错误：上传附件失败。","Error: Failed to upload attachment. Message: {{errorMessage}}":"错误：上传附件失败。信息：{{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"错误：上传附件失败。信息：{{errorMessage}}","Escalations":"升级","Expectation":"预期","Export":"Export","Export as CSV":"作为 CSV 导出","Exporting CSV...":"导出 CSV...","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"为问题单 {{caseNumber}} 上传附件 {{attachmentName}} 失败: {{errorMessage}}","File description":"文件描述","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"文件名不得超过 80 个字符，网页上传文件大小不能超过 1 GB。请使用 FTP 将大文件上传到 dropbox.redhat.com。","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"{{CaseService.kase.contact_name}} 在 {{CaseService.kase.created_date}} 创建","Filename":"文件名","Find My Account Number":"找到我们的帐户号码","First Name":"名","For example: 1-888-467-3342":"例如：1-888-467-3342","Friday End Time:":"周五结束时间：","Friday Start Time:":"周五开始时间：","GSS ICE FAQ":"GSS ICE 常见问题","GSS ICE Form":"GSS ICE 表格","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"GSS 目正在采取使用电子邮件的方式提高 ICE 进度。关注此空间了解可使用这个方法的详细内容。","Get faster results.":"更迅速地得到结果。","Group Name:":"组名称：","Group Users:":"组用户：","Handpicked For You":"为您精选","Highest Severity":"最高严重性","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"如果出于某种原因无法使用这个表格，请向 helpdesk@redhat.com 提交一个 ticket，并注释 GSS Ticketing 和 ICE 表格问题","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"如果您或者用户要求提供某些信息，且您需要我们联系您以便讨论这些问题。","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"如果您要申请帐户审核，如果这与某个具体问题/ticket 或者一系列问题/ticket 有关，或者这只是一般问题或常见问题","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"如果您确定有查看此资源的权限，请 <a href=\"/support/contact/customerService.html\">联系客户服务</a>以获得帮助。您的 Red Hat 登录信息未能与您机构中的的正确帐户关联，或者您的订阅出现问题。无论是哪种原因，客户服务都能帮助您解决问题。","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"如果您的问题愈发严重或案例应具有更高优先级，请提供详细信息，支持经理将会复核该案例。","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"如果您仍然希望创建一个新的支持案例，请选择“创建新支持案例”。系统将会根据您所选择的日志自动生成案例中的部分内容。","Internal Priority":"内部优先权","Internal Status":"内部状态","Is Public:":"是否公开：","Issue Description":"问题描述","Last Modified By":"最后修改","Last Name":"姓","Last Updated By":"最后一位更新者","Learn More":"了解更多","Learn more":"了解更多信息","Life of Case":"问题单的生命期","Loading cases...":"正在载入问题单......","Locating top solutions":"正在查找主要解决方案","Log File Viewer":"日志文件查看器","Log In":"登录","Log Out":"登出","Logged into the Red Hat Customer Portal as":"以以下身份登录到红帽客户门户网站","Logs":"日志","Lowest Severity":"最低严重性","MISSING SBT. Entitlement status: {{entitlementStatus}}":"缺失 SBT。权利状态：{{entitlementStatus}}","Manage Case Groups":"管理问题单组","Manage Default Case Groups":"管理默认问题单组","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"被 {{case.last_modified_by}} 在 {{case.last_modified_date}} 修改","Monday End Time:":"周一结束时间：","Monday Start Time:":"周一开始时间：","My Cases":"我的问题单","N/A":"N/A","NEXT":"下一个","NONE":"无","NOT BREACHED":"NOT BREACHED","Name":"名称","Need to raise a concern to Red Hat Support management?":"是否需要 Red Hat 支持管理介入？","Negotiated Entitlement Process":"谈判的权利过程","Newest Date Created":"已生成最新日期","Newest Date Modified":"已修改最新日期","Newest to Oldest":"从最新到最老","No":"否","No Files were attached to your case.":"您的问题单没有附加的文件。","No attachments added":"无添加的附件","No cases found with given filters.":"无匹配的支持案例。","No cases found.":"没有找到问题单。","No groups found.":"没有找到组。","No linked bugzillas":"没有相关的 bugzilla 报告","No match found":"未发现匹配","No solutions found.":"未发现解决方案。","No url roles or user roles found.":"没有找到 url 角色或用户角色。","No, Go Back":"不是，返回。","Not Found":"未找到","Not Logged into the Red Hat Customer Portal":"没有登录到红帽用户门户网站","Note:":"备注：","Notes:":"备注：","Number of Open Cases":"处于打开状态的问题单数量","Oldest Date Created":"已生成第一个日期","Oldest Date Modified":"已修改第一个日期","Oldest to Newest":"从最老到最新","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"提交请求后，会在 GSS 问题单管理系统中生成 ICE ticket，GSS 领导团队会关注此问题单。","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"在选择了您的日志文件后，点“红帽诊断”按钮可以根据您的日志文件对系统进行诊断，红帽知识库中的相应条目将会被显示。","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"提交请求后，会在 GSS 新建一个合作伙伴升级问题单，并通知 GSS 领导团队。然后您会在您提供的以下电子邮件地址中收到一封电子邮件，其中附带合作伙伴升级问题单号码，以及如何跟踪进程的附加信息。","Open":"新建","Open New Case":"新建问题单","Open Support Cases":"新建支持问题单","Open a New Support Case":"创建一个新的支持案例","Open and Closed":"新建及已关闭","Open and Closed Support Cases":"新建及已关闭支持问题单","Owned by {{case.contact_name}}":"所有者是 {{case.contact_name}}","Owner":"所有者","Owner Information":"拥有者信息","Password":"密码","Please":"请","Please Add File Description":"请添加文件描述","Please Select the Machine":"请选择机器","Please check the requestor email address":"请检查申请人的电子邮件地址","Please note, contents of this field are not visible to Red Hat Support professionals.":"请注意，Red Hat 支持专业人士不会看到这个字段中的内容。","Please provide as much detail as possible to help us understand the issue, for example:":"请尽可能提供详细资料以帮助我们了解问题所在，例如：","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"请尽量提供更多的细节来帮助我们了解这个问题，例如：升级原因、业务环境、竞争环境、以往的支持体验。","Please provide as much information as possible in the form.":"请在表格中提供尽可能多的信息。","Please provide as much information/detail as possible in the form.":"请在表格中提供尽可能多的信息/详情。","Please provide expectations and desired outcomes from yourself and from the customer":"请提供您自己以及客户的预期及要求的结果。","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"如可能，可要求用户提供其账户号码，也可以使用 Red Hat 账户号码。点击本页右上角的用户名就可以找到这个账户号码。","Post":"发布","Priority Customer Support Routing":"优先 Red Hat 支持途径","Private":"专用","Private Notes":"专用备注","Product":"产品","Product Version":"产品版本","Production Support Service Level Agreement":"产品支持服务级别协议","Read Access":"读取权限","Reason for the escalation, the business context, the competitive situation, past support experience":"升级理由、业务环境、竞争环境、以往的支持体验","Recommendations":"建议","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"通过使用 Red Hat Access，您可以方便地通过红帽用户门户网站来自助解决问题、诊断问题并和红帽进行联系。您需要有效的账户来访问红帽用户门户网站的资源。","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"红帽用户门户网站的用户帐号和登录到其它产品的用户帐号不同。","Red Hat Diagnose":"红帽诊断","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"Red Hat  全球支持服务（GSS）和 Red Hat 全球伙伴启动（Global Partner Enablement）建立了合作伙伴升级机制，以便我们的战略合作伙伴将未解决的问题或者关键任务客户支持问题单升级至 GSS 领导团队。这个过程可让您及 Red Hat 更好地处理客户问题，并提供促进解决这些问题的程序。","Red Hat Login":"红帽登录","Red Hat Support Severity Level Definitions":"红帽支持严重性级别定义","Red Hat Support Ticket Number":"Red Hat Ticket 号码","Refining top solutions":"精选主要解决方案","Reply":"回复","Request Management Escalation":"请求管理升级","Request escalation":"请求升级","Requestor":"申请人","Resolution":"解决方案","SBR Group":"SBR 组","SBT":"SBT","SBT State":"SBT 状态","SUPPORT CASES":"支持问题单","Save":"保存","Save Changes":"保存更改","Save Group":"保存组","Search":"搜索","Search Articles and Solutions":"搜索文章及解决方案","Search Cases By Number":"根据问题单号进行搜索","Search Knowledgebase Solutions":"搜索知识库中的解决方案","Search Solutions":"搜索解决方案","Search Support Case":"搜索支持问题单","Select File":"选择文件","Select Log":"选择日志","Select a User":"选择用户","Send Email Notifications to":"将电子邮件通知发送至","Send Request":"发送请求","Server File(s) To Attach:":"附加的服务器文件：","Severity":"严重性","Sign in":"登录","Sign into the Red Hat Customer Portal":"登录到红帽用户门户网站","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"从左面的列表中查找并选择一个日志文件，点“选择文件”按钮。","Size":"大小","Sort by":"排序方式","Special Handling":"特殊处理","Start Time":"开始时间","Status":"状态","Strategic":"策略","Submit":"提交","Submit Attachment":"提交附件","Submit Request":"提交请求","Successfully created case number {{caseNumber}}":"成功创建的问题单数量 {{caseNumber}}","Successfully created group {{groupName}}":"成功创建的组 {{groupName}}","Successfully deleted attachment:{{attachmentName}}":"成功删除的附件：{{attachmentName}}","Successfully deleted group {{groupName}}":"成功删除的组 {{groupName}}","Successfully deleted groups.":"成功删除组。","Successfully set {{groupName}} as {{userName}}'s default group.":"成功地把 {{userName}} 的默认组设置为 {{groupName}}。","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"成功地为问题单 {{caseNumber}} 上传了附件 {{attachmentFileName}}","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"成功地为问题单 {{caseNumber}} 上传了附件 {{attachmentName}}","Successfully uploaded attachment.":"成功上传附件。","Suggested Solutions":"推荐的解决方案","Summary of Request":"请求概述","Support":"支持","Support Level":"支持级别","Support Subscription Required":"需要支持订阅","TAM":"TAM","Target Date":"目标日期","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"您提供的是有效凭证，但无法<b>直接从 Red Hat 获得支持。</b>","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"日志文件查看器可以对应用程序的日志文件进行诊断，并可以在红帽全球支持服务系统中创建一个支持案例。","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"您要查找的页面不在此处。它可能已被移动、删除，或者其名字和地址已更改。也可能因为技术原因暂时不可用。","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"然后申请人会收到一封电子邮件（电子邮件地址如下所示），其中包含 ICE ticket 号及如何追踪器问题处理进程的附加信息。","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"所有 Red Hat 员工都可以使用内部客户升级提交表格获得该问题的管理支持，这些支持可获得标准支持程序以外的特别关注。请访问","This is your 8 digit Red Hat Support ticket number":"这是您的 6 位数 Red Hat ticket 号码","This release is now retired, please refer to the recommended FAQ prior to filing a case":"这个版本已经不被支持，请在创建案例前参考我们推荐的 FAQ。","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"这应该是与您的 Red Hat 客户门户网站或者合作伙伴中心登录关联的电子邮件。","Thursday End Time:":"周四结束时间：","Thursday Start Time:":"周四开始时间：","To Learn more view the":"如需了解更多，请参阅","To learn more, visit the":"如需了解更多，请访问","To view a recommendation, click on it.":"点一个建议项来查看它的内容。","Top Solutions":"主要解决方案","Transcript of chat between":"聊天记录","Tuesday End Time:":"周二结束时间：","Tuesday Start Time:":"周二开始时间：","Unauthorized.":"未授权。","Ungrouped Case":"未分组问题单","Ungrouped Cases":"未分组问题单","Update":"更新（Update）","Updating Recommendations":"正在更新建议","Upload Attachments":"上传附件","Uploading attachment...":"正在上传附件......","Uploading attachments...":"正在上传附件......","User Name":"用户名","User does not have permissions to set default case group.":"用户没有权限设置默认问题单组。","User does not have proper credentials to manage case groups.":"用户没有管理问题单组所需证书。","Version":"版本","View Production Support Service Level Agreement":"查看产品支持服务级别协议","Violates SLA":"违反 SLA","Was not able to fetch user given ssoUserName":"无法获得用户 ssoUserName","Wednesday End Time:":"周三结束时间：","Wednesday Start Time:":"周三开始时间：","Write Access":"写入权限","Yes":"是","Yes, Submit":"是，提交","You have successfully logged out of the Red Hat Customer Portal.":"已成功登录 Red Hat 客户门户网站。","You must be logged in to use this functionality.":"您必须登录方可使用这个功能。","Your Cases":"您的问题单","Your Email address":"您的电子邮件地址","Your Ice Escalation request has been sent successfully":"已成功发送您的 Ice 升级请求","Your Partner Escalation request has been sent successfully":"已成功发送您的合作伙伴升级（Partner Escalation）请求","Your Phone Number":"您的电话号码","Your Pins":"您的 Pin","Your Red Hat Contact Phone Number":"您的 Red Hat 联系电话号码","Your Red Hat Email Address":"您的 Red Hat 电子邮件地址","and":"和","at":"于","click here":"点击这里","for more information about the ICE process.":"查看 ICE 处理进程的详情。","for more information.":"详情。","{{charactersLeft}} characters left.":"{{charactersLeft}} 个字符剩余。","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"{{errorFileName}} 大于 {{errorFileSize}} GB，无法被附加。请使用 FTP 把大文件传到 dropbox.redhat.com。","{{noteCharactersLeft}} characters left.":"{{noteCharactersLeft}} 个字符剩余。"});
    gettextCatalog.setStrings('ru', {"(In reply to {{personName}})":"(ответ на комментарий {{personName}})","(More info)":"(подробнее)","* All fields are mandatory.":"* Необходимо заполнить все поля.","* marked fields are mandatory fields.":"* отмеченные поля являются обязательными.","24x7 Contact":"Круглосуточная связь","24x7 Coverage":"Круглосуточное покрытие","24x7 Support":"Круглосуточная поддержка","Account":"Учетная запись","Account Information":"Информация об учетной записи","Account Name":"Имя учетной записи","Account Notes":"Примечания","Account not found.":"Учетная запись не найдена.","Active":"Активен","Add":"Добавить","Adding user {{userName}} to case.":"Добавление {{userName}} к отчету.","All Attachments":"Все вложения","All Groups":"Все группы","Already Escalated?":"Эскалация уже инициирована?","Alternate Case ID":"Доп. идентификатор запроса","Are you sure you want to change this case severity to {{severityName}}?":"Вы действительно хотите изменить приоритет запроса на {{severityName}}?","Are you sure you want to change this case status to {{statusName}}?":"Вы действительно хотите изменить статус на {{statusName}}?","Are you sure you want to close the selected cases?":"Вы действительно хотите закрыть выбранные запросы?","Assigned to":"Назначено","Attach Another File":"Добавить другой файл","Attach File":"Добавить файл","Attach Foreman logs:":"Добавить журналы Foreman:","Attached":"Добавлено","Attached By":"Добавил ","Attached Files":"Добавленные файлы","Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?":"Включение в отчет журналов и данных диагностики значительно сократит время его обработки. Продолжить без добавления файлов?","Attaching logs or other diagnostics files typically results in faster resolution.":"Добавление журналов и файлов диагностики поможет быстрее найти правильное решение.","Available Log Files":"Доступные журналы","BACK":"НАЗАД","BREACH":"ПРЕВЫШЕНО","Back":"Назад","Based on your description, here are some possible solutions":"Список возможных решений","Breached by {{breachTime}}":"Превышено на {{breachTime}}","Breaching in {{breachTime}}":"Будет превышено через {{breachTime}}","Bugzilla Number":"Номер Bugzilla","Bugzilla Tickets":"Отчеты Bugzilla","Bugzillas":"Bugzilla","Business Hours":"Часы работы","CASE {{CaseService.kase.case_number}}":"ЗАПРОС {{CaseService.kase.case_number}}","CASE {{caseNumber}}":"ЗАПРОС {{caseNumber}}","CREATE A NEW SUPPORT CASE":"ОТКРЫТЬ ЗАПРОС ПОДДЕРЖКИ","Cancel":"Отмена","Case  {{caseNumber}} successfully closed.":"Запрос  {{caseNumber}} закрыт.","Case Bugzillas":"Bugzilla","Case Description":"Описание","Case Detail":"Свойства запроса","Case Discussion":"Обсуждение","Case Escalations":"Эскалация","Case Group":"Группа запросов","Case Group (Optional)":"Группа (дополнительно)","Case Group Name:":"Имя группы:","Case Group:":"Группа:","Case History":"Журнал","Case Information":"Информация о запросе","Case Name":"Тема","Case Overview":"Обзор","Case Owner (A-Z)":"Владелец (A-Z)","Case Owner (Z-A)":"Владелец (Z-A)","Case Resolution":"Решение","Case Summary":"Краткое описание","Case Type":"Тип запроса","Case group successfully updated.":"Группа обновлена.","Case severity was changed.":"Приоритет изменен.","Case status was changed.":"Статус запроса изменен.","Case users successfully updated.":"Пользователи обновлены.","Case {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}":"Запрос {{case.resource.caseNumber}} <br> {{case.resource.internalStatus}}","Case {{caseNumber}} successfully closed.":"Запрос {{caseNumber}} закрыт.","Chat Offline":"Офлайн-чат","Chat with Support":"Чат с поддержкой","Choose File(s) To Attach:":"Выберите файлы:","Close":"Закрыть","Close Case":"Закрыть запрос","Close messages":"Закрыть","Closed":"Закрыто","Closed Support Cases":"закрыт(о)","Closing Cases.":"Запросы закрываются.","Closing cases.":"Запросы закрываются.","Comment:":"Комментарий:","Create Case Group":"Создать группу","Create New Case Group":"Создать новую группу запросов","Create a New Support Case":"Создать запрос","Created By":"Создан","Created by {{case.created_by}} on {{case.created_date}}":"Создан {{case.created_by}}, {{case.created_date}}","Creating Ice Escalation request .....":"Создание запроса эскалации ICE...","Creating Partner Escalation request .....":"Создание запроса эскалации в рамках программы партнерства...","Creating case...":"Создание запроса...","Creating group {{groupName}}...":"Создание группы {{groupName}}...","Customer":"Клиент","Customer Account Number":"Номер учетной записи","Customer Contact Email":"Электронный адрес","Customer Contact Name":"Имя клиента","Customer Contact Number":"Контактный телефон","Customer GEO":"Регион","Delete":"Удалить","Delete Group":"Удалить группу","Deleting attachment: {{attachmentName}}":"Удаление вложения {{attachmentName}}","Description":"Описание","Diagnose":"Диагностика","Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.":"Уровень поддержки может отличаться в зависимости от того, какие подписки были вами приобретены.","Discard Changes":"Отменить","Discussion":"Обсуждение","Edit":"Изменить","Email address is incorrect":"Неверный электронный адрес","Entitlement Information":"Информация о разрешениях","Environment":"Окружение","Error: Failed to upload attachment.":"Ошибка. Не удалось добавить вложение.","Error: Failed to upload attachment. Message: {{errorMessage}}":"Не удалось добавить вложение. Ошибка: {{errorMessage}}","Error: Failed to upload attachment. Message:{{errorMessage}}":"Не удалось добавить вложение. Ошибка: {{errorMessage}}","Escalations":"Эскалация","Expectation":"Ожидаемый результат","Export":"Экспорт","Export as CSV":"Экспорт в CSV","Exporting CSV...":"Экспорт в CSV...","Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}":"Не удалось прикрепить {{attachmentName}} к запросу {{caseNumber}}: {{errorMessage}}","File description":"Описание файла","File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.":"Имена файлов не могут содержать больше 80 знаков, а размер вложения не должен превышать 1 ГБ. Для больших файлов рекомендуется использовать dropbox.redhat.com.","Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}":"Создал  {{CaseService.kase.contact_name}}, {{CaseService.kase.created_date}}","Filename":"Имя файла","Find My Account Number":"Мой номер","First Name":"Имя","For example: 1-888-467-3342":"Пример: 1-888-467-3342","Friday End Time:":"Пт., до:","Friday Start Time:":"Пт., с:","GSS ICE FAQ":"FAQ по ICE","GSS ICE Form":"Форма ICE ","GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.":"GSS продолжает работу по оптимизации обмена электронной корреспонденцией ICE. Следите за обновлениями на этой странице.","Get faster results.":"Быстрый ответ.","Group Name:":"Имя группы:","Group Users:":"Пользователи группы:","Handpicked For You":"Рекомендации","Highest Severity":"Приоритет (по убыванию)","If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form":"Если эта форма не работает, сообщите об этом в центр поддержки по адресу helpdesk@redhat.com","If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.":"Если это запрос информации и вы хотите, чтобы мы связались с вами, чтобы его обсудить.","If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain":"Если вы хотите обсудить пересмотр вашего контракта; если это имеет отношение к конкретной проблеме; если это запрос или жалоба общего характера.","If you believe you should have permission to view this resource, please <a href=\"/support/contact/customerService.html\">contact Customer Service</a> for assistance. Your Red Hat login might not be associated with the right account for your organization, or there might be an issue with your subscription. Either way, Customer Service should be able to help you resolve the problem.":"Если вы считаете, что у вас должен быть доступ к этой странице, обратитесь в <a href=\"/support/contact/customerService.html\">службу поддержки</a>. Возможно, ваше имя пользователя Red Hat не было связано с учетной записью или проблема связана с подпиской. Служба поддержки поможет ответить на эти вопросы.","If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.":"Если вы считаете, что вашему запросу должно быть уделено больше внимания, объясните причину в комментариях.","In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.":"Если вы все же хотите открыть запрос, нажмите «Открыть новый запрос». Данные из выбранного журнала будут автоматически добавлены в отчет.","Internal Priority":"Внутренний приоритет","Internal Status":"Внутренний статус","Is Public:":"Доступно всем","Issue Description":"Описание проблемы","Last Modified By":"Изменил","Last Name":"Фамилия","Last Updated By":"Последнее обновление","Learn More":"Узнать больше","Learn more":"Узнать больше","Life of Case":"Время жизни запроса","Loading cases...":"Загрузка запросов...","Locating top solutions":"Поиск популярных решений","Log File Viewer":"Просмотр журналов","Log In":"Вход","Log Out":"Выход","Logged into the Red Hat Customer Portal as":"Пользователь:","Logs":"Журналы","Lowest Severity":"Приоритет (по возрастанию)","MISSING SBT. Entitlement status: {{entitlementStatus}}":"Просрочка согласованного срока не определена. Статус: {{entitlementStatus}}","Manage Case Groups":"Управление группами","Manage Default Case Groups":"Управление исходными группами запросов","Modified by {{case.last_modified_by}} on {{case.last_modified_date}}":"Изменил {{case.last_modified_by}}, {{case.last_modified_date}}","Monday End Time:":"Пн., до:","Monday Start Time:":"Пн., с:","My Cases":"Мои запросы","N/A":"нет","NEXT":"ВПЕРЕД","NONE":"НЕТ","NOT BREACHED":"НЕ ПРЕВЫШЕНО","Name":"Имя","Need to raise a concern to Red Hat Support management?":"Связь с руководством службы поддержки Red Hat","Negotiated Entitlement Process":"Согласованные условия","Newest Date Created":"Дата создания (по убыванию)","Newest Date Modified":"Дата изменения (по убыванию)","Newest to Oldest":"Сначала новые","No":"Нет","No Files were attached to your case.":"К запросу не были приложены файлы.","No attachments added":"Нет вложений","No cases found with given filters.":"Нет запросов.","No cases found.":"Нет запросов.","No groups found.":"Нет групп.","No linked bugzillas":"Нет запросов Bugzilla","No match found":"Нет совпадений","No solutions found.":"Решения не найдены","No url roles or user roles found.":"Роли URL и роли пользователей не найдены.","No, Go Back":"Нет, вернуться","Not Found":"Нет результатов.","Not Logged into the Red Hat Customer Portal":"Не авторизован на портале пользователей","Note:":"Примечание:","Notes:":"Примечания:","Number of Open Cases":"Число открытых запросов","Oldest Date Created":"Дата создания (по возрастанию)","Oldest Date Modified":"Дата изменения (по возрастанию)","Oldest to Newest":"Сначала старые","Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.":"Это создаст запрос ICE в системе заявок GSS с уведомлением руководства службы поддержки.","Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.":"После выбора журнала можно проверить наличие подходящих статей, нажав кнопку «Диагностика Red Hat». Будут показаны подходящие статьи и решения из базы знаний Red Hat.","Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.":"Это создаст запрос эскалации в рамках программы партнерства и уведомит руководство службы поддержки. В  подтверждение вы получите почтовое сообщение с номером заявки и информацией о том, как вы сможете отслеживать ее ход обработки. ","Open":"Открыто","Open New Case":"Открыть новый запрос","Open Support Cases":"открыт(о)","Open a New Support Case":"Открыть новый запрос","Open and Closed":"Открытые и закрытые","Open and Closed Support Cases":"открыто и закрыто","Owned by {{case.contact_name}}":"Владелец {{case.contact_name}}","Owner":"Владелец","Owner Information":"Информация о владельце","Password":"Пароль","Please":"Пожалуйста, ","Please Add File Description":"Добавьте описание файла","Please Select the Machine":"Выберите компьютер","Please check the requestor email address":"Проверьте электронный адрес","Please note, contents of this field are not visible to Red Hat Support professionals.":"Служба поддержки Red Hat не увидит это поле.","Please provide as much detail as possible to help us understand the issue, for example:":"Постарайтесь подробно описать проблему, например:","Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience":"Постарайтесь подробно описать проблему, указав причину эскалации, бизнес-контекст, конфликтную ситуацию и опыт предыдущего общения с поддержкой","Please provide as much information as possible in the form.":"Постарайтесь заполнить форму как можно подробнее","Please provide as much information/detail as possible in the form.":"Постарайтесь заполнить форму как можно подробнее","Please provide expectations and desired outcomes from yourself and from the customer":"Опишите ожидаемые результаты.","Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.":"Уточните номер учетной записи у клиента или используйте свой номер, который можно узнать, щелкнув на имени пользователя в правом верхнем углу страницы.","Post":"Опубликовать","Priority Customer Support Routing":"Приоритетная поддержка","Private":"Закрытый","Private Notes":"Скрытые примечания","Product":"Платформа","Product Version":"Версия","Production Support Service Level Agreement":"Соглашение об обслуживании","Read Access":"Доступ на чтение","Reason for the escalation, the business context, the competitive situation, past support experience":"Причина эскалации, бизнес-контекст, конфликтная ситуация и предыдущие контакты с поддержкой","Recommendations":"Рекомендации","Red Hat Access makes it easy for you to self-solve issues, diagnose problems, and engage with us via the Red Hat Customer Portal. To access Red Hat Customer Portal resources, you must enter valid portal credentials.":"Red Hat Access облегчает самостоятельную диагностику конфликтов и предоставляет каналы связи с Red Hat через портал пользователей. Для доступа к ресурсам портала надо будет авторизоваться.","Red Hat Customer Portal credentials differ from the credentials used to log into this product.":"Имя пользователя и пароль на портале отличаются от имени и пароля доступа к программному продукту.","Red Hat Diagnose":"Диагностика Red Hat","Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.":"Служба глобальной поддержки Red Hat в рамках программы партнерства предоставляет нашим стратегическим партнерам возможность эскалации критических запросов поддержки для привлечения дополнительного внимания руководства службы поддержки. Вместе мы подберем оптимальное решение и разработаем план действий для скорейшего решения проблемы. ","Red Hat Login":"Учетная запись Red Hat","Red Hat Support Severity Level Definitions":"Классификация приоритетов","Red Hat Support Ticket Number":"Номер заявки","Refining top solutions":"Уточнение решений","Reply":"Ответить","Request Management Escalation":"Запрос эскалации к менеджеру","Request escalation":"Эскалация запроса","Requestor":"Инициатор","Resolution":"Решение","SBR Group":"Группа","SBT":"Нарушение согласованного срока","SBT State":"Статус","SUPPORT CASES":"ЗАПРОСЫ ПОДДЕРЖКИ","Save":"Сохранить","Save Changes":"Сохранить","Save Group":"Сохранить группу","Search":"Поиск","Search Articles and Solutions":"Поиск статей и решений","Search Cases By Number":"Искать по номеру","Search Knowledgebase Solutions":"Поиск в базе знаний","Search Solutions":"Искать решения","Search Support Case":"Поиск запросов поддержки","Select File":"Выбрать файл","Select Log":"Выберите журнал","Select a User":"Выберите пользователя","Send Email Notifications to":"Почтовые уведомления","Send Request":"Отправить","Server File(s) To Attach:":"Файлы на сервере:","Severity":"Приоритет","Sign in":"Вход","Sign into the Red Hat Customer Portal":"Авторизация на портале пользователей Red Hat","Simply navigate to and select a log file from the list on the left and click the 'Select File' button.":"Выберите журнал из списка и нажмите «Выбрать файл».","Size":"Размер","Sort by":"Сортировать","Special Handling":"Специальная обработка","Start Time":"Время начала","Status":"Статус","Strategic":"Стратегический","Submit":"Отправить","Submit Attachment":"Отправить вложение","Submit Request":"Отправить","Successfully created case number {{caseNumber}}":"Запрос зарегистрирован под номером {{caseNumber}}","Successfully created group {{groupName}}":"Группа {{groupName}} создана.","Successfully deleted attachment:{{attachmentName}}":"Вложение {{attachmentName}} удалено.","Successfully deleted group {{groupName}}":"Группа {{groupName}} удалена.","Successfully deleted groups.":"Группы удалены","Successfully set {{groupName}} as {{userName}}'s default group.":"{{userName}} будет использовать группу {{groupName}} по умолчанию.","Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}":"{{attachmentFileName}} прикреплен к запросу {{caseNumber}}","Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}":"{{attachmentName}} прикреплен к запросу {{caseNumber}}","Successfully uploaded attachment.":"Вложение добавлено.","Suggested Solutions":"Возможные решения","Summary of Request":"Сводка запроса","Support":"Поддержка","Support Level":"Уровень поддержки","Support Subscription Required":"Требуется действительная подписка","TAM":"Сопровождение","Target Date":"Установлен срок","The credentials you provided are valid, but you do not have <b>direct support from Red Hat.</b>":"Учетные данные действительны, но доступ к <b>прямой поддержке Red Hat</b> отсутствует.","The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.":"В окне просмотра можно проверить журналы и создать запрос обслуживания в службе поддержки Red Hat.","The page you are looking for is not here. It might have been moved, removed, or had its name and address changed. It might otherwise be temporarily unavailable for technical reasons.":"Страница недоступна. Возможно, ее адрес изменился, она была перемещена или недоступна по техническим причинам.","The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.":"На адрес автора запроса будет отправлено подтверждение с номером заявки ICE и информацией о том, как можно будет отслеживать процесс ее рассмотрения.","This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the":"С помощью этой формы сотрудники Red Hat могут связаться с руководством для обсуждения вопросов, выходящих за рамки стандартной процедуры поддержки. Обратитесь к","This is your 8 digit Red Hat Support ticket number":"Восьмизначный номер заявки на поддержку Red Hat.","This release is now retired, please refer to the recommended FAQ prior to filing a case":"Жизненный цикл этого выпуска подошел к концу.  Прежде чем создать запрос, ознакомьтесь с секцией вопросов и ответов.","This should be the email address associated with your Red Hat Customer Portal or Partner Center login":"Электронный адрес, который был указан при регистрации на портале или через партнерский центр","Thursday End Time:":"Чтв., до:","Thursday Start Time:":"Чтв., с:","To Learn more view the":"Чтобы узнать больше, смотрите","To learn more, visit the":"Чтобы узнать больше, смотрите","To view a recommendation, click on it.":"Выберите рекомендацию для просмотра.","Top Solutions":"Популярные решения","Transcript of chat between":"Запись разговора ","Tuesday End Time:":"Вт., до:","Tuesday Start Time:":"Вт., с:","Unauthorized.":"Не авторизован.","Ungrouped Case":"Без группы","Ungrouped Cases":"Без группы","Update":"Обновить","Updating Recommendations":"Обновление рекомендаций","Upload Attachments":"Добавить вложения","Uploading attachment...":"Добавление вложения...","Uploading attachments...":"Добавление вложений...","User Name":"Имя пользователя","User does not have permissions to set default case group.":"У пользователя недостаточно разрешений, чтобы изменить исходную группу.","User does not have proper credentials to manage case groups.":"У пользователя недостаточно разрешений для управления группами запросов.","Version":"Версия","View Production Support Service Level Agreement":"Посмотреть соглашение об обслуживании","Violates SLA":"Нарушает соглашение об обслуживании","Was not able to fetch user given ssoUserName":"Не удалось найти пользователя по ssoUserName","Wednesday End Time:":"Ср., до:","Wednesday Start Time:":"Ср., с:","Write Access":"Доступ на запись","Yes":"Да","Yes, Submit":"Да, отправить","You have successfully logged out of the Red Hat Customer Portal.":"Ваш сеанс завершен.","You must be logged in to use this functionality.":"Для выполнения этой операции необходимо авторизоваться.","Your Cases":"Ваши запросы","Your Email address":"Ваш электронный адрес","Your Ice Escalation request has been sent successfully":"Запрос эскалации ICE отправлен","Your Partner Escalation request has been sent successfully":"Запрос эскалации отправлен.","Your Phone Number":"Ваш номер телефона","Your Pins":"Ваши закладки","Your Red Hat Contact Phone Number":"Контактный телефон Red Hat","Your Red Hat Email Address":"Электронный адрес Red Hat","and":"и","at":"в","click here":"нажмите здесь","for more information about the ICE process.":"для получения информации о процессе ICE.","for more information.":"для получения дополнительной информации.","{{charactersLeft}} characters left.":"осталось: {{charactersLeft}}","{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.":"Размер {{errorFileName}} превышает 1 ГБ. Для больших файлов рекомендуется использовать dropbox.redhat.com.","{{noteCharactersLeft}} characters left.":"осталось символов: {{noteCharactersLeft}}"});
/* jshint +W100 */
}]);
'use strict';
angular.module('RedhatAccess.cases', [
    'ui.router',
    'ui.bootstrap',
    'localytics.directives',
    'ngTable',
    'infinite-scroll',
    'RedhatAccess.template',
    'RedhatAccess.security',
    'RedhatAccess.search',
    'RedhatAccess.ui-utils',
    'RedhatAccess.common',
    'RedhatAccess.header'
]).constant('CASE_EVENTS', {
    received: 'case-received',
    searchSubmit: 'search-submit',
    searchBoxChange: 'search-box-change',
    productSelectChange: 'product-select-change',
    ownerChange: 'owner-change',
    caseStatusChanged: 'case-status-change',
    caseSeverityChanged: 'case-severity-change',
    caseClose: 'case-close'
}).constant('CHAT_SUPPORT', {
    enableChat: false,
    chatButtonToken: '573A0000000GmiP',
    chatLiveAgentUrlPrefix: 'https://d.la1w1.salesforceliveagent.com/chat',
    chatInitHashOne: '572A0000000GmiP',
    chatInitHashTwo: '00DA0000000HxWH',
    chatIframeHackUrlPrefix: 'https://rogsstest.secure.force.com/chatHidden'
}).constant('STATUS', {
    open: 'open',
    closed: 'closed',
    both: 'both'
}).value('NEW_DEFAULTS', {
    'product': '',
    'version': ''
}).value('GLOBAL_CASE_CONFIG', {
    'showRecommendations': true,
    'showAttachments': true
}).value('NEW_CASE_CONFIG', {
    'showRecommendations': true,
    'showAttachments': true,
    'showServerSideAttachments': true,
    'productSortListFile': '/productSortList.txt',
    'isPCM': false
}).value('EDIT_CASE_CONFIG', {
    'showDetails': true,
    'showDescription': true,
    'showBugzillas': true,
    'showAttachments': true,
    'showRecommendations': true,
    'showComments': true,
    'showServerSideAttachments': true,
    'showEmailNotifications': true,
    'isPCM': false
}).config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider.state('edit', {
            url: '/case/{id:[0-9]{1,8}}?commentId',
            templateUrl: 'cases/views/edit.html',
            controller: 'Edit',
            reloadOnSearch: false
        });
        $stateProvider.state('new', {
            url: '/case/new',
            templateUrl: 'cases/views/new.html',
            controller: 'New'
        });
        $stateProvider.state('list', {
            url: '/case/list',
            templateUrl: 'cases/views/list.html',
            controller: 'List'
        });
        $stateProvider.state('group', {
            url: '/case/group',
            controller: 'Group',
            templateUrl: 'cases/views/group.html'
        });
        $stateProvider.state('defaultGroup', {
            url: '/case/group/default',
            controller: 'DefaultGroup',
            templateUrl: 'cases/views/defaultGroup.html'
        });
        $stateProvider.state('editGroup', {
            url: '/case/group/{groupNumber}',
            controller: 'EditGroup',
            templateUrl: 'cases/views/editGroup.html'
        });
        $stateProvider.state('404', {
            url: '/404',
            templateUrl: 'cases/views/404.html'
        });
        $stateProvider.state('403', {
            url: '/403',
            templateUrl: 'cases/views/403.html'
        });
    }
]);

'use strict';
angular.module('RedhatAccess.escalation', [
    'RedhatAccess.template',
    'RedhatAccess.security',
    'RedhatAccess.ui-utils',
    'RedhatAccess.common',
    'RedhatAccess.header'
]).config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider.state('partnerEscalation', {
            url: '/partnerEscalationRequest',
            controller: 'EscalationRequest',
            templateUrl: 'escalation/views/partnerEscalation.html'
        });
        $stateProvider.state('iceEscalation', {
            url: '/iceEscalationRequest',
            controller: 'EscalationRequest',
            templateUrl: 'escalation/views/iceEscalation.html'
        });
    }
]).constant('ESCALATION_TYPE', {
    partner: 'Partner Escalation',
    ice: 'ICE',
    sales: 'Sales Escalation'
});
//var testURL = 'http://localhost:8080/LogCollector/';
// angular module
'use strict';
angular.module('RedhatAccess.logViewer', [
    'angularTreeview',
    'ui.bootstrap',
    'RedhatAccess.search',
    'RedhatAccess.header'
]).config([
    '$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('logviewer', {
            url: '/logviewer',
            templateUrl: 'log_viewer/views/log_viewer.html'
        });
    }
]).constant('LOGVIEWER_EVENTS', { allTabsClosed: 'allTabsClosed' }).value('hideMachinesDropdown', { value: false });
function returnNode(splitPath, tree, fullFilePath) {
    if (splitPath[0] !== undefined) {
        if (splitPath[0] !== '') {
            var node = splitPath[0];
            var match = false;
            var index = 0;
            for (var i in tree) {
                if (tree[i].roleName === node) {
                    match = true;
                    index = i;
                    break;
                }
            }
            if (!match) {
                var object = {};
                object.roleName = node;
                object.roleId = node;
                if (splitPath.length === 1) {
                    object.fullPath = fullFilePath;
                }
                object.children = [];
                tree.push(object);
                index = tree.length - 1;
            }
            splitPath.shift();
            returnNode(splitPath, tree[index].children, fullFilePath);
        } else {
            splitPath.shift();
            returnNode(splitPath, tree, fullFilePath);
        }
    }
}
function parseList(tree, data) {
    var files = data.split('\n');
    for (var i in files) {
        var file = files[i];
        var splitPath = file.split('/');
        returnNode(splitPath, tree, file);
    }
}

/*jshint camelcase: false */
'use strict';
/*jshint unused:vars */
/**
 * @ngdoc module
 * @name
 *
 * @description
 *
 */
angular.module('RedhatAccess.search', [
    'ui.router',
    'RedhatAccess.template',
    'RedhatAccess.security',
    'ui.bootstrap',
    'ngSanitize',
    'RedhatAccess.ui-utils',
    'RedhatAccess.common',
    'RedhatAccess.header'
]).constant('SEARCH_PARAMS', { limit: 10 }).value('SEARCH_CONFIG', {
    openCaseRef: '#/case/new',
    showOpenCaseBtn: true
}).config([
    '$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('search', {
            url: '/search',
            controller: 'SearchController',
            templateUrl: 'search/views/search.html'
        }).state('search_accordion', {
            url: '/search2',
            controller: 'SearchController',
            templateUrl: 'search/views/accordion_search.html'
        });
    }
]);
'use strict';
/*jshint unused:vars, camelcase:false */
/**
 * @ngdoc module
 * @name
 *
 * @description
 *
 */
angular.module('RedhatAccess.search').controller('SearchController', [
    '$scope',
    '$location',
    'SearchResultsService',
    'SEARCH_CONFIG',
    'securityService',
    'AlertService',
    function ($scope, $location, SearchResultsService, SEARCH_CONFIG, securityService, AlertService) {
        $scope.SearchResultsService = SearchResultsService;
        $scope.results = SearchResultsService.results;
        $scope.selectedSolution = SearchResultsService.currentSelection;
        $scope.searchInProgress = SearchResultsService.searchInProgress;
        $scope.currentSearchData = SearchResultsService.currentSearchData;
        $scope.itemsPerPage = 3;
        $scope.maxPagerSize = 5;
        $scope.selectPage = function (pageNum) {
            var start = $scope.itemsPerPage * (pageNum - 1);
            var end = start + $scope.itemsPerPage;
            end = end > SearchResultsService.results.length ? SearchResultsService.results.length : end;
            $scope.results = SearchResultsService.results.slice(start, end);
        };
        $scope.getOpenCaseRef = function () {
            if (SEARCH_CONFIG.openCaseRef !== undefined) {
                //TODO data may be complex type - need to normalize to string in future
                return SEARCH_CONFIG.openCaseRef + '?data=' + SearchResultsService.currentSearchData.data;
            } else {
                return '#/case/new?data=' + SearchResultsService.currentSearchData.data;
            }
        };
        $scope.solutionSelected = function (index) {
            var response = $scope.results[index];
            SearchResultsService.setSelected(response, index);
        };
        $scope.search = function (searchStr, limit) {
            SearchResultsService.search(searchStr, limit);
        };
        $scope.diagnose = function (data, limit) {
            SearchResultsService.diagnose(data, limit);
        };
        $scope.triggerAnalytics = function ($event) {
            if (this.isopen && window.chrometwo_require !== undefined && $location.path() === '/case/new') {
                chrometwo_require(['analytics/main'], function (analytics) {
                    analytics.trigger('OpenSupportCaseRecommendationClick', $event);
                });
            }
        };
        $scope.$watch(function () {
            return SearchResultsService.currentSelection;
        }, function (newVal) {
            $scope.selectedSolution = newVal;
        });
    }
]);

/*jshint camelcase: false */
'use strict';
/*jshint unused:vars */
/**
 * @ngdoc module
 * @name
 *
 * @description
 *
 */
angular.module('RedhatAccess.search').directive('rhaAccordionsearchresults', [
    'SEARCH_CONFIG',
    function (SEARCH_CONFIG) {
        return {
            restrict: 'AE',
            scope: false,
            templateUrl: 'search/views/accordion_search_results.html',
            link: function (scope, element, attr) {
                scope.showOpenCaseBtn = function () {
                    if (SEARCH_CONFIG.showOpenCaseBtn && (attr && attr.opencase === 'true')) {
                        return true;
                    } else {
                        return false;
                    }
                };
            }
        };
    }
]);

/*jshint camelcase: false */
'use strict';
/*jshint unused:vars */
/**
 * @ngdoc module
 * @name
 *
 * @description
 *
 */
angular.module('RedhatAccess.search').directive('rhaListsearchresults', function () {
    return {
        restrict: 'AE',
        scope: false,
        templateUrl: 'search/views/list_search_results.html'
    };
});

/*jshint camelcase: false */
'use strict';
/*jshint unused:vars */
/**
 * @ngdoc module
 * @name
 *
 * @description
 *
 */
angular.module('RedhatAccess.search').directive('rhaResultdetaildisplay', [
    'RESOURCE_TYPES',
    function (RESOURCE_TYPES) {
        return {
            restrict: 'AE',
            scope: { result: '=' },
            link: function (scope, element, attr) {
                scope.isSolution = function () {
                    if (scope.result !== undefined && scope.result.resource_type !== undefined) {
                        if (scope.result.resource_type === RESOURCE_TYPES.solution) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return false;
                };
                scope.isArticle = function () {
                    if (scope.result !== undefined && scope.result.resource_type !== undefined) {
                        if (scope.result.resource_type === RESOURCE_TYPES.article) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return false;
                };
                scope.getSolutionResolution = function () {
                    var resolutionHtml = '';
                    if (scope.result.resolution !== undefined) {
                        resolutionHtml = scope.result.resolution.html;
                    }
                    return resolutionHtml;
                };
                scope.getArticleHtml = function () {
                    if (scope.result === undefined) {
                        return '';
                    }
                    if (scope.result.body !== undefined) {
                        if (scope.result.body.html !== undefined) {
                            //this is for newer version of strata
                            return scope.result.body.html;
                        } else {
                            //handle old markdown format
                            return scope.result.body;
                        }
                    } else {
                        return '';
                    }
                };

                scope.resultClickCapture = function(event, result) {
                    var target = event.target || event.srcElement; // srcElement === IE
                    var isAnchor = target && (target.nodeName && target.nodeName.toLowerCase() === 'a');
                    if (!isAnchor) {
                        // Don't care - bail.
                        return;
                    }
                    var hashRegex = /^#.*/,
                        absoluteRegex = /^http(s?):\/\//;
                    // target.href adds base uri - have to use getAttr('href')
                    var href = target.getAttribute('href');
                    if (hashRegex.test(href)) {
                        // Found a hash href (starts with #)
                        event.preventDefault();
                        var targetElem = angular.element(target.hash),
                            scrollElem = angular.element('#rha-solution-display');
                        if (targetElem.length && scrollElem.length) {
                            // We have a target element, and a scroll host
                            // set scroll of top of target element
                            scrollElem.scrollTop(targetElem.position().top);
                        } else if (targetElem.length) {
                            // No scroll host, just use native method that will scroll
                            // the window
                            targetElem[0].scrollIntoView();
                        }
                    } else if (!absoluteRegex.test(href)) {
                        // Found a relative href (does NOT start with http or https)
                        event.preventDefault();
                        if(href.indexOf('/') === 0) {
                            // Absolute url relative to result view_uri
                            // This is a very hacky way to get the base url from a url
                            var parser = document.createElement('a');
                            parser.href = result.view_uri;
                            target.href = parser.origin + href;
                        } else {
                            // Relative url relative to result view_uri
                            target.href = result.view_uri + href;
                        }
                        // Re-click target with newly constructed href
                        target.click();
                    }
                };
            },
            templateUrl: 'search/views/resultDetail.html'
        };
    }
]);

/*jshint camelcase: false */
'use strict';
/*jshint unused:vars */
/**
 * @ngdoc module
 * @name
 *
 * @description
 *
 */
angular.module('RedhatAccess.search').directive('rhaSearchform', function () {
    return {
        restrict: 'AE',
        scope: false,
        templateUrl: 'search/views/search_form.html'
    };
});

/*jshint camelcase: false */
'use strict';
/*jshint unused:vars */
/**
 * @ngdoc module
 * @name
 *
 * @description
 *
 */
angular.module('RedhatAccess.search').directive('rhaStandardsearch', function () {
    return {
        restrict: 'AE',
        scope: false,
        templateUrl: 'search/views/standard_search.html'
    };
});

/*jshint camelcase: false */
'use strict';
/*jshint unused:vars */
/**
 * @ngdoc module
 * @name
 *
 * @description
 *
 */
angular.module('RedhatAccess.search').factory('SearchResultsService', [
    '$q',
    '$rootScope',
    'AUTH_EVENTS',
    'RESOURCE_TYPES',
    'SEARCH_PARAMS',
    'AlertService',
    'securityService',
    'strataService',
    'translate',
    function ($q, $rootScope, AUTH_EVENTS, RESOURCE_TYPES, SEARCH_PARAMS, AlertService, securityService, strataService, translate) {
        var searchArticlesOrSolutions = function (searchString, limit) {
            //var that = this;
            if (limit === undefined || limit < 1) {
                limit = SEARCH_PARAMS.limit;
            }
            service.clear();
            AlertService.clearAlerts();
            service.setCurrentSearchData(searchString, 'search');
            strataService.search(searchString, limit).then(
                function (results) {
                    if (results.length === 0) {
                        AlertService.addSuccessMessage(translate('No solutions found.'));
                    }
                    results.forEach(function (result) {
                        if (result !== undefined) {
                            service.add(result);
                        }
                    });
                    service.searchInProgress.value = false;
                }, function (error) {
                    service.searchInProgress.value = false;
                });
        };
        var searchProblems = function (data, limit) {
            if (limit === undefined || limit < 1) {
                limit = SEARCH_PARAMS.limit;
            }
            service.clear();
            AlertService.clearAlerts();
            var deferreds = [];
            service.searchInProgress.value = true;
            service.setCurrentSearchData(data, 'diagnose');
            strataService.problems(data, limit).then(
                function (solutions) {
                    //retrieve details for each solution
                    if (solutions !== undefined) {
                        if (solutions.length === 0) {
                            AlertService.addSuccessMessage(translate('No solutions found.'));
                        }
                        solutions.forEach(function (solution) {
                            var deferred = $q.defer();
                            deferreds.push(deferred.promise);
                            strataService.solutions.get(solution.uri).then(
                                function (solution) {
                                    deferred.resolve(solution);
                                },
                                function (error) {
                                    deferred.resolve();
                                });
                        });
                    } else {
                        AlertService.addSuccessMessage(translate('No solutions found.'));
                    }
                    $q.all(deferreds).then(function (solutions) {
                        solutions.forEach(function (solution) {
                            if (solution !== undefined) {
                                service.add(solution);
                            }
                        });
                        service.searchInProgress.value = false;
                    }, function (error) {
                        service.searchInProgress.value = false;
                    });
                },
                function (error) {
                    service.searchInProgress.value = false;
                    AlertService.addDangerMessage(error);
                });
        };
        var service = {
            results: [],
            currentSelection: {
                data: {},
                index: -1
            },
            searchInProgress: {
                value: false
            },
            currentSearchData: {
                data: '',
                method: ''
            },
            add: function (result) {
                this.results.push(result);
            },
            clear: function () {
                this.results.length = 0;
                this.setSelected({}, -1);
                this.setCurrentSearchData('', '');
            },
            setSelected: function (selection, index) {
                this.currentSelection.data = selection;
                this.currentSelection.index = index;
            },
            setCurrentSearchData: function (data, method) {
                this.currentSearchData.data = data;
                this.currentSearchData.method = method;
            },
            search: function (searchString, limit) {
                this.searchInProgress.value = true;
                var that = this;
                securityService.validateLogin(true).then(function (authedUser) {
                    searchArticlesOrSolutions(searchString, limit);
                }, function (error) {
                    that.searchInProgress.value = false;
                    AlertService.addDangerMessage(translate('You must be logged in to use this functionality.'));
                });
            },
            diagnose: function (data, limit) {
                this.searchInProgress.value = true;
                var that = this;
                securityService.validateLogin(true).then(function (authedUser) {
                    searchProblems(data, limit);
                }, function (error) {
                    that.searchInProgress.value = false;
                    AlertService.addDangerMessage(translate('You must be logged in to use this functionality.'));
                });
            }
        };
        $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
            service.clear.apply(service);
        });
        return service;
    }
]);
'use strict';
angular.module('RedhatAccess.cases').controller('AccountSelect', [
    '$scope',
    'strataService',
    'AlertService',
    'CaseService',
    'RHAUtils',
    'gettextCatalog',
    'ProductsService',
    function ($scope, strataService, AlertService, CaseService, RHAUtils, gettextCatalog,ProductsService) {
        $scope.CaseService = CaseService;
        $scope.selectUserAccount = function () {
            $scope.loadingAccountNumber = true;
            strataService.accounts.list().then(function (response) {
                $scope.loadingAccountNumber = false;
                CaseService.account.number = response;
                $scope.populateAccountSpecificFields();
            }, function (error) {
                $scope.loadingAccountNumber = false;
                AlertService.addStrataErrorMessage(error);
            });
        };
        $scope.alertInstance = null;
        $scope.populateAccountSpecificFields = function () {
            if (RHAUtils.isNotEmpty(CaseService.account.number)) {
                var promise = null;
                strataService.accounts.get(CaseService.account.number).then(function () {
                    if (RHAUtils.isNotEmpty($scope.alertInstance)) {
                        AlertService.removeAlert($scope.alertInstance);
                    }
                    promise = CaseService.populateUsers();
                    promise.then(angular.bind(this, function (users)
                    {
                        if(RHAUtils.isEmpty(CaseService.owner)) {
                            ProductsService.clear();
                            CaseService.clearProdVersionFromLS();
                        }else{
                            CaseService.onOwnerSelectChanged();
                        }
                        CaseService.validateNewCase();
                    }));

                }, function () {
                    if (RHAUtils.isNotEmpty($scope.alertInstance)) {
                        AlertService.removeAlert($scope.alertInstance);
                    }
                    $scope.alertInstance = AlertService.addWarningMessage(gettextCatalog.getString('Account not found.'));
                    CaseService.users = [];
                    ProductsService.clear();
                    CaseService.clearProdVersionFromLS();
                    CaseService.validateNewCase();
                });
            }
        };
    }
]);

'use strict';
/*global $, draftComment*/
/*jshint camelcase: false, expr: true*/
angular.module('RedhatAccess.cases').controller('AddCommentSection', [
    '$scope',
    'strataService',
    'CaseService',
    'AlertService',
    'AttachmentsService',
    'DiscussionService',
    'securityService',
    '$timeout',
    'RHAUtils',
    'EDIT_CASE_CONFIG',
    'gettextCatalog',
    function ($scope, strataService, CaseService, AlertService, AttachmentsService, DiscussionService, securityService, $timeout, RHAUtils, EDIT_CASE_CONFIG, gettextCatalog) {
        $scope.CaseService = CaseService;
        $scope.securityService = securityService;
        $scope.AttachmentsService = AttachmentsService;
        $scope.DiscussionService = DiscussionService;
        $scope.addingComment = false;
        $scope.progressCount = 0;
        $scope.charactersLeft = 0;
        $scope.maxCommentLength = '32000';
        $scope.ieFileDescription = '';

        DiscussionService.commentTextBoxEnlargen = false;

        $scope.clearComment = function(){
        	CaseService.commentText = '';
            DiscussionService.commentTextBoxEnlargen = false;
        	CaseService.localStorageCache.remove(CaseService.kase.case_number+securityService.loginStatus.authedUser.sso_username);
        	AttachmentsService.updatedAttachments = [];
        };

        $scope.addComment = function () {
            if (!securityService.loginStatus.authedUser.is_internal) {
                CaseService.isCommentPublic = true;
            }
            var onSuccess = function () {
                CaseService.isCommentPublic = true;
                CaseService.draftCommentOnServerExists=false;
                if(CaseService.localStorageCache)
                {
                    CaseService.localStorageCache.remove(CaseService.kase.case_number+securityService.loginStatus.authedUser.sso_username);
                }
                if (RHAUtils.isNotEmpty($scope.saveDraftPromise)) {
                    $timeout.cancel($scope.saveDraftPromise);
                }
                CaseService.commentText = '';
                CaseService.disableAddComment = true;
                CaseService.checkForCaseStatusToggleOnAttachOrComment();

                CaseService.populateComments(CaseService.kase.case_number).then(function () {
                    $scope.addingComment = false;
                    $scope.savingDraft = false;
                    CaseService.draftSaved = false;
                    CaseService.draftComment = undefined;
                    DiscussionService.commentTextBoxEnlargen = false;
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                });
                $scope.progressCount = 0;
                $scope.charactersLeft = 0;

                if(securityService.loginStatus.authedUser.sso_username !== undefined && CaseService.updatedNotifiedUsers.indexOf(securityService.loginStatus.authedUser.sso_username) === -1){
                    strataService.cases.notified_users.add(CaseService.kase.case_number, securityService.loginStatus.authedUser.sso_username).then(function () {
                        CaseService.updatedNotifiedUsers.push(securityService.loginStatus.authedUser.sso_username);
                    }, function (error) {
                        AlertService.addStrataErrorMessage(error);
                    });
                }

            };
            var onError = function (error) {
                AlertService.addStrataErrorMessage(error);
                $scope.addingComment = false;
                $scope.progressCount = 0;
                $scope.charactersLeft = 0;
            };
            if(!CaseService.disableAddComment && CaseService.commentText !== 'undefined'){
                $scope.addingComment = true;
                if(CaseService.localStorageCache) {
                    if(CaseService.draftCommentOnServerExists)
                    {
                        strataService.cases.comments.put(CaseService.kase.case_number, CaseService.commentText, false, CaseService.isCommentPublic, CaseService.draftComment.id).then(onSuccess, onError);
                    }
                    else {
                        strataService.cases.comments.post(CaseService.kase.case_number, CaseService.commentText, CaseService.isCommentPublic, false).then(onSuccess, onError);
                    }
                }
                else {
                    if (RHAUtils.isNotEmpty(CaseService.draftComment)) {
                        strataService.cases.comments.put(CaseService.kase.case_number, CaseService.commentText, false, CaseService.isCommentPublic, CaseService.draftComment.id).then(onSuccess, onError);
                    } else {
                        strataService.cases.comments.post(CaseService.kase.case_number, CaseService.commentText, CaseService.isCommentPublic, false).then(onSuccess, onError);
                    }
                }
            }
            if ((AttachmentsService.updatedAttachments.length > 0 || AttachmentsService.hasBackEndSelections()) && EDIT_CASE_CONFIG.showAttachments) {
                $scope.addingattachment = true;
                AttachmentsService.updateAttachments(CaseService.kase.case_number).then(function () {
                    $scope.addingattachment = false;
                    CaseService.checkForCaseStatusToggleOnAttachOrComment();
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                    $scope.addingattachment = false;
                });
            }
        };
        $scope.saveDraftPromise;
        $scope.onNewCommentKeypress = function () {
            if(CaseService.localStorageCache)
            {
                if(CaseService.draftCommentOnServerExists)
                {
                    CaseService.draftCommentLocalStorage = {'text': CaseService.commentText,
                        'id': CaseService.draftComment.id,
                        'draft': true,
                        'public': CaseService.isCommentPublic,
                        'case_number': CaseService.kase.case_number
                    };
                }
                else {
                    CaseService.draftCommentLocalStorage = {
                        'text': CaseService.commentText,
                        'draft': true,
                        'public': CaseService.isCommentPublic,
                        'case_number': CaseService.kase.case_number
                    };
                }
                if(RHAUtils.isEmpty(CaseService.commentText))
                {
                    CaseService.draftCommentLocalStorage.public=true;
                }
                CaseService.localStorageCache.put(CaseService.kase.case_number+securityService.loginStatus.authedUser.sso_username,CaseService.draftCommentLocalStorage);
                CaseService.disableAddComment = false;
                if (RHAUtils.isEmpty(CaseService.commentText)) {
                    CaseService.disableAddComment = true;
                }
            }
            else {
                if (RHAUtils.isNotEmpty(CaseService.commentText) && !$scope.addingComment) {
                    CaseService.disableAddComment = false;
                    $timeout.cancel($scope.saveDraftPromise);
                    $scope.saveDraftPromise = $timeout(function () {
                        if (!$scope.addingComment && CaseService.commentText !== '') {
                            $scope.saveDraft();
                        }
                    }, 5000);
                } else if (RHAUtils.isEmpty(CaseService.commentText)) {
                    CaseService.disableAddComment = true;
                }
            }
        };

        $scope.onCommentPublicChange = function () {
            if(RHAUtils.isNotEmpty(CaseService.commentText))
            {
                $scope.onNewCommentKeypress();
            }

        };
        $scope.$watch('CaseService.commentText', function() {
            $scope.maxCharacterCheck();
        });
        $scope.maxCharacterCheck = function() {
            if (CaseService.commentText !== undefined && $scope.maxCommentLength  >= CaseService.commentText.length) {
                var count = CaseService.commentText.length * 100 / $scope.maxCommentLength ;
                parseInt(count);
                $scope.progressCount = Math.round(count * 100) / 100;
                var breakMatches = CaseService.commentText.match(/(\r\n|\n|\r)/g);
                var numberOfLineBreaks = 0;
                if(breakMatches){
                    numberOfLineBreaks = breakMatches.length;
                }
                $scope.charactersLeft = $scope.maxCommentLength - CaseService.commentText.length - numberOfLineBreaks;
                if($scope.charactersLeft < 0){
                    $scope.charactersLeft = 0;
                }
            }
            else if(CaseService.commentText===undefined)
            {
                $scope.progressCount=0;
                $scope.charactersLeft = 0;
            }
        };
        $scope.saveDraft = function () {
            $scope.savingDraft = true;
            if (!securityService.loginStatus.authedUser.is_internal) {
                CaseService.isCommentPublic = true;
            }
            var onSuccess = function (commentId) {
                $scope.savingDraft = false;
                CaseService.draftSaved = true;
                CaseService.draftComment = {
                    'text': CaseService.commentText,
                    'id': RHAUtils.isNotEmpty(commentId) ? commentId : CaseService.draftComment.id,
                    'draft': true,
                    'public': CaseService.isCommentPublic,
                    'case_number': CaseService.kase.case_number
                };
            };
            var onFailure = function (error) {
                AlertService.addStrataErrorMessage(error);
                $scope.savingDraft = false;
            };
            if (RHAUtils.isNotEmpty(CaseService.draftComment)) {
                //draft update
                strataService.cases.comments.put(CaseService.kase.case_number, CaseService.commentText, true, CaseService.isCommentPublic, CaseService.draftComment.id).then(onSuccess, onFailure);
            } else {
                //initial draft save
                strataService.cases.comments.post(CaseService.kase.case_number, CaseService.commentText, CaseService.isCommentPublic, true).then(onSuccess, onFailure);
            }
        };
        $scope.shouldTextboxMinimize = function(){
            if(RHAUtils.isEmpty(CaseService.commentText)){
                DiscussionService.commentTextBoxEnlargen=false;
            }
        };
        $scope.ieFileUpload = function($event) {
            var form = document.getElementById('fileUploaderForm');
            var iframeId = document.getElementById('upload_target');
            form.action = 'https://' + window.location.host + '/rs/cases/' + CaseService.kase.case_number + '/attachments';

            var eventHandler = function () {
                if (iframeId.removeEventListener){
                    iframeId.removeEventListener('load', eventHandler, false);
                }else if (iframeId.detachEvent){
                    iframeId.detachEvent('onload', eventHandler);
                }
                if(!$scope.ie8){
                    var content;
                    if (iframeId.contentDocument && iframeId.contentDocument.body !== null) {
                        content = iframeId.contentDocument.body.innerText;
                    } else if (iframeId.contentWindow && iframeId.contentWindow.document.body !== null) {
                        content = iframeId.contentWindow.document.body.innerText;
                    }
                    if (content !== undefined && content.length) {
                        var parser = document.createElement('a');
                        parser.href = content;
                        var splitPath = parser.pathname.split('/');
                        if(splitPath !== undefined && splitPath[4] !== undefined){
                            AttachmentsService.clear();
                            strataService.cache.clr('attachments' + CaseService.kase.case_number);
                            strataService.cases.attachments.list(CaseService.kase.case_number).then(function (attachmentsJSON) {
                                $scope.addingComment = false;
                                AttachmentsService.defineOriginalAttachments(attachmentsJSON);
                                $scope.ieClearSelectedFile();

                            }, function (error) {
                                $scope.addingComment = false;
                                AlertService.addStrataErrorMessage(error);
                            });
                        } else {
                            $scope.addingComment = false;
                            AlertService.addDangerMessage(gettextCatalog.getString('Error: Failed to upload attachment. Message: {{errorMessage}}',{errorMessage:content}));
                            $scope.$apply();
                        }
                    } else {
                        $scope.addingComment = false;
                        AlertService.addDangerMessage(gettextCatalog.getString('Error: Failed to upload attachment. Message: {{errorMessage}}',{errorMessage:content}));
                        $scope.$apply();
                    }
                }else {
                    strataService.cases.attachments.list(CaseService.kase.case_number).then(function (attachmentsJSON) {
                        $scope.addingComment = false;
                        if(attachmentsJSON.length !== AttachmentsService.originalAttachments.length){
                            AttachmentsService.defineOriginalAttachments(attachmentsJSON);
                            $scope.ieClearSelectedFile();
                        } else{
                            AlertService.addDangerMessage(gettextCatalog.getString('Error: Failed to upload attachment.'));
                        }

                    }, function (error) {
                        $scope.addingComment = false;
                        AlertService.addStrataErrorMessage(error);
                    });
                }
                setTimeout(function(){
                },
                    100
                );
            };

            if (iframeId.addEventListener){
                iframeId.addEventListener('load', eventHandler, false);
            } else if (iframeId.attachEvent){
                iframeId.attachEvent('onload', eventHandler);
            }
            $scope.addingComment = true;
            form.submit();
        };
        $scope.ieClearSelectedFile = function () {
            $scope.ieFileDescription = '';
        };
        $scope.submitIEAttachment = function () {
            if(EDIT_CASE_CONFIG.showAttachments && $scope.ie8 || EDIT_CASE_CONFIG.showAttachments && $scope.ie9 ) {
                $scope.ieFileUpload(CaseService.kase.case_number);
            }
        }
    }

]);

'use strict';
/*global $ */
angular.module('RedhatAccess.cases').controller('AttachLocalFile', [
    '$scope',
    'AlertService',
    'AttachmentsService',
    'CaseService',
    'securityService',
    'RHAUtils',
    'gettextCatalog',
    function ($scope, AlertService, AttachmentsService, CaseService, securityService, RHAUtils,gettextCatalog) {
        $scope.AttachmentsService = AttachmentsService;
        $scope.CaseService = CaseService;
        $scope.NO_FILE_CHOSEN = 'No file chosen';
        $scope.fileDescription = '';

        $scope.init = function () {
            AttachmentsService.fetchMaxAttachmentSize();
        };

        $scope.clearSelectedFile = function () {
            $scope.fileName = $scope.NO_FILE_CHOSEN;
            $scope.fileDescription = '';
        };
        $scope.addFile = function () {
            /*jshint camelcase: false */
            var createdDate = RHAUtils.convertToTimezone(new Date());
            AttachmentsService.addNewAttachment({
                file_name: $scope.fileName,
                description: $scope.fileDescription,
                fileObj: $scope.fileObj,
                length: $scope.fileSize,
                created_by: securityService.loginStatus.authedUser.last_name+', '+securityService.loginStatus.authedUser.first_name,
                created_date:  RHAUtils.formatDate(createdDate, 'MMM DD YYYY'),
                created_time:  RHAUtils.formatDate(createdDate, 'hh:mm A Z')
            });
            $scope.clearSelectedFile();
            if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
                $scope.$apply();
            }
        };
        $scope.getFile = function () {
            $('#fileUploader').click();
        };
        $scope.selectFile = function () {
            // Strata will always keep the limit display in Mb (current = 1024Mb)
            var maxSize = (AttachmentsService.maxAttachmentSize/1024)*1000000000;
            if($('#fileUploader')[0].files[0].size < maxSize){
                $scope.fileObj = $('#fileUploader')[0].files[0];
                $scope.fileSize = $scope.fileObj.size;
                $scope.fileName = $scope.fileObj.name;
                if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
                    $scope.$apply();
                }
	            $scope.addFile();
            } else {
                 var message=gettextCatalog.getString("{{errorFileName}} cannot be attached because it is larger than {{errorFileSize}} GB. Please FTP large files to dropbox.redhat.com.",{errorFileName:$('#fileUploader')[0].files[0].name,errorFileSize:(AttachmentsService.maxAttachmentSize/1024)});
                AlertService.addDangerMessage(message);
            }
            $('#fileUploader')[0].value = '';
        };
        $scope.clearSelectedFile();
        $scope.init();
    }
]);

'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').controller('AttachmentsSection', [
    '$window',
    '$scope',
    'AlertService',
    'AttachmentsService',
    'CaseService',
    'strataService',
    'TreeViewSelectorUtils',
    'EDIT_CASE_CONFIG',
    'gettextCatalog',
    function ($window, $scope, AlertService, AttachmentsService, CaseService, strataService, TreeViewSelectorUtils, EDIT_CASE_CONFIG, gettextCatalog) {
        $scope.rhaDisabled = !EDIT_CASE_CONFIG.showAttachments;
        $scope.showServerSideAttachments = EDIT_CASE_CONFIG.showServerSideAttachments;
        $scope.isPCM = EDIT_CASE_CONFIG.isPCM;
        $scope.ie8 = window.ie8;
        $scope.ie9 = window.ie9;
        $scope.ieFileDescription ='';
        $scope.AttachmentsService = AttachmentsService;
        $scope.CaseService = CaseService;
        $scope.TreeViewSelectorUtils = TreeViewSelectorUtils;
        $scope.ie8Message='We’re unable to accept file attachments from Internet Explorer 8 (IE8) at this time. Please see our instructions for providing files <a href=\"https://access.redhat.com/solutions/2112\" target="_blank\">via FTP </a> in the interim.';
        $scope.doUpdate = function () {
            $scope.updatingAttachments = true;
            AttachmentsService.updateAttachments(CaseService.kase.case_number).then(function () {
                $scope.updatingAttachments = false;
                CaseService.checkForCaseStatusToggleOnAttachOrComment();
            }, function (error) {
                $scope.updatingAttachments = false;
            });
        };

        $scope.ieClearSelectedFile = function () {
            $scope.ieFileDescription = '';
        };

        $scope.ieUpload = function($event) {
            var uploadingAlert = AlertService.addWarningMessage(gettextCatalog.getString('Uploading attachment...'));
            var form = document.getElementById('fileUploaderForm');
            var iframeId = document.getElementById('upload_target');
            form.action = 'https://' + window.location.host + '/rs/cases/' + CaseService.kase.case_number + '/attachments';

            var eventHandler = function () {
                if (iframeId.removeEventListener){
                    iframeId.removeEventListener('load', eventHandler, false);
                }else if (iframeId.detachEvent){
                    iframeId.detachEvent('onload', eventHandler);
                }
                if(!$scope.ie8){
                    var content;
                    if (iframeId.contentDocument && iframeId.contentDocument.body !== null) {
                        content = iframeId.contentDocument.body.innerText;
                    } else if (iframeId.contentWindow && iframeId.contentWindow.document.body !== null) {
                        content = iframeId.contentWindow.document.body.innerText;
                    }
                    if (content !== undefined && content.length) {
                        var parser = document.createElement('a');
                        parser.href = content;
                        var splitPath = parser.pathname.split('/');
                        if(splitPath !== undefined && splitPath[4] !== undefined){
                            AttachmentsService.clear();
                            strataService.cache.clr('attachments' + CaseService.kase.case_number);
                            strataService.cases.attachments.list(CaseService.kase.case_number).then(function (attachmentsJSON) {
                                AlertService.removeAlert(uploadingAlert);
                                AttachmentsService.defineOriginalAttachments(attachmentsJSON);
                                AlertService.addSuccessMessage(gettextCatalog.getString('Successfully uploaded attachment.'));
                                CaseService.checkForCaseStatusToggleOnAttachOrComment();
                                $scope.ieClearSelectedFile();

                            }, function (error) {
                                AlertService.addStrataErrorMessage(error);
                            });
                        } else {
                            AlertService.removeAlert(uploadingAlert);
                            AlertService.addDangerMessage(gettextCatalog.getString('Error: Failed to upload attachment. Message:{{errorMessage}}',{errorMessage:content}));
                            $scope.$apply();
                        }
                    } else {
                        AlertService.removeAlert(uploadingAlert);
                        AlertService.addDangerMessage(gettextCatalog.getString('Error: Failed to upload attachment. Message:{{errorMessage}}',{errorMessage:content}));
                        $scope.$apply();
                    }
                }else {
                    strataService.cases.attachments.list(CaseService.kase.case_number).then(function (attachmentsJSON) {
                        if(attachmentsJSON.length !== AttachmentsService.originalAttachments.length){
                            AlertService.removeAlert(uploadingAlert);
                            AttachmentsService.defineOriginalAttachments(attachmentsJSON);
                            AlertService.addSuccessMessage(gettextCatalog.getString('Successfully uploaded attachment.'));
                            CaseService.checkForCaseStatusToggleOnAttachOrComment();
                            $scope.ieClearSelectedFile();
                        } else{
                            AlertService.removeAlert(uploadingAlert);
                            AlertService.addDangerMessage(gettextCatalog.getString('Error: Failed to upload attachment.'));
                        }

                    }, function (error) {
                        AlertService.addStrataErrorMessage(error);
                    });
                }
                setTimeout(function(){
                },
                    100
                );
            };

            if (iframeId.addEventListener){
                iframeId.addEventListener('load', eventHandler, false);
            } else if (iframeId.attachEvent){
                iframeId.attachEvent('onload', eventHandler);
            }
            form.submit();
        };
    }
]);

'use strict';
angular.module('RedhatAccess.cases').controller('BackEndAttachmentsCtrl', [
    '$scope',
    '$location',
    'TreeViewSelectorData',
    'AttachmentsService',
    'NEW_CASE_CONFIG',
    'EDIT_CASE_CONFIG',
    function ($scope, $location, TreeViewSelectorData, AttachmentsService, NEW_CASE_CONFIG, EDIT_CASE_CONFIG) {
        $scope.name = 'Attachments';
        $scope.attachmentTree = [];
        var newCase = false;
        var editCase = false;
        if ($location.path().indexOf('new') > -1) {
            newCase = true;
        } else {
            editCase = true;
        }
        if (!$scope.rhaDisabled && newCase && NEW_CASE_CONFIG.showServerSideAttachments || !$scope.rhaDisabled && editCase && EDIT_CASE_CONFIG.showServerSideAttachments) {
            var sessionId = $location.search().sessionId;
            TreeViewSelectorData.getTree('attachments', sessionId).then(function (tree) {
                $scope.attachmentTree = tree;
                AttachmentsService.updateBackEndAttachments(tree);
            }, function () {
            });
        }
    }
]);
'use strict';
/*global $ */
/*jshint camelcase: false*/
angular.module('RedhatAccess.cases').controller('CommonConfirmationModal', [
    '$scope',
    '$modalInstance',
    'CaseService',
    'strataService',
    'AlertService',
    'SearchCaseService',
    'gettextCatalog',
    'CASE_EVENTS',
    '$q',
    function ($scope, $modalInstance, CaseService, strataService, AlertService, SearchCaseService, gettextCatalog, CASE_EVENTS, $q) {
        $scope.CaseService = CaseService;
        $scope.confirm = function () {
            $modalInstance.close();
            if(CaseService.confirmationModal === CASE_EVENTS.caseClose) {
                $scope.closeCases();
            } else {
                CaseService.updateCase().then(function () {
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                });
            }
        };
        $scope.closeModal = function () {
            if(CaseService.confirmationModal === CASE_EVENTS.caseStatusChanged) {
                CaseService.kase.status = CaseService.prestineKase.status;
            } else if(CaseService.confirmationModal === CASE_EVENTS.caseSeverityChanged) {
                CaseService.kase.severity = CaseService.prestineKase.severity;
            }
            $modalInstance.close();
        };
        $scope.closeCases = function () {
            var promises = [];
            AlertService.addWarningMessage(gettextCatalog.getString('Closing cases.'));
            angular.forEach(SearchCaseService.cases, angular.bind(this, function (kase) {
                if(kase.selected){
                    var promise = strataService.cases.put(kase.case_number, {status: 'Closed'});
                    promise.then( angular.bind(kase, function (response) {
                        kase.selected = false;
                        AlertService.addSuccessMessage(gettextCatalog.getString('Case  {{caseNumber}} successfully closed.',{caseNumber:kase.case_number}));
                        kase.status = 'Closed';
                    }), function (error) {
                        AlertService.addStrataErrorMessage(error);
                    });
                    promises.push(promise);
                }
            }));
            var parentPromise = $q.all(promises);
            parentPromise.then(function (success) {
                SearchCaseService.refreshFilterCache=true;
                CaseService.onSelectChanged();
            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };
    }
]);


'use strict';
/*global $ */
angular.module('RedhatAccess.cases').controller('CreateGroupButton', [
    '$scope',
    '$modal',
    function ($scope, $modal) {
        $scope.openCreateGroupDialog = function () {
            $modal.open({
                templateUrl: 'cases/views/createGroupModal.html',
                controller: 'CreateGroupModal'
            });
        };
    }
]);
'use strict';
/*global $ */
angular.module('RedhatAccess.cases').controller('CreateGroupModal', [
    '$scope',
    '$modalInstance',
    'strataService',
    'securityService',
    'AlertService',
    'CaseService',
    'GroupService',
    'gettextCatalog',
    function ($scope, $modalInstance, strataService, securityService, AlertService, CaseService, GroupService, gettextCatalog) {
        $scope.createGroup = function () {
            AlertService.addWarningMessage(gettextCatalog.getString('Creating group {{groupName}}...',{groupName:this.groupName}));
            $modalInstance.close();
            strataService.groups.create(this.groupName, securityService.loginStatus.authedUser.sso_username).then(angular.bind(this, function (success) {
                if(success !== null){
                    CaseService.groups.push({
                        name: this.groupName,
                        number: success
                    });
                    AlertService.clearAlerts();
                    AlertService.addSuccessMessage(gettextCatalog.getString('Successfully created group {{groupName}}',{groupName:this.groupName}));
                    GroupService.reloadTable();
                } else {
                    CaseService.populateGroups(securityService.loginStatus.authedUser.sso_username, true).then(angular.bind(this, function (groups) {
                        AlertService.clearAlerts();
                        AlertService.addSuccessMessage(gettextCatalog.getString('Successfully created group {{groupName}}',{groupName:this.groupName}));
                        GroupService.reloadTable();
                    }), function (error) {
                        AlertService.clearAlerts();
                        AlertService.addStrataErrorMessage(error);
                    });
                }
            }), function (error) {
                AlertService.clearAlerts();
                AlertService.addStrataErrorMessage(error);
            });
        };
        $scope.closeModal = function () {
            $modalInstance.close();
        };
        $scope.onGroupNameKeyPress = function ($event) {
            if ($event.keyCode === 13) {
                angular.bind(this, $scope.createGroup)();
            }
        };
    }
]);

'use strict';
/*global $ */
/*jshint expr: true, camelcase: false, newcap: false */
angular.module('RedhatAccess.cases').controller('DefaultGroup', [
    '$scope',
    'strataService',
    'CaseService',
    'AlertService',
    '$location',
    'securityService',
    'AUTH_EVENTS',
    'gettextCatalog',
    function ($scope, strataService, CaseService, AlertService, $location, securityService, AUTH_EVENTS, gettextCatalog) {
        $scope.securityService = securityService;
        $scope.CaseService = CaseService;
        $scope.listEmpty = false;
        $scope.selectedGroup = {};
        $scope.selectedUser = {};
        $scope.usersOnAccount = [];
        $scope.account = null;
        $scope.groups = [];
        $scope.ssoName = null;
        $scope.groupsLoading = true;
        $scope.usersLoading = false;
        $scope.usersLoaded = false;
        $scope.usersAndGroupsFinishedLoading = false;
        $scope.userCanManageDefaultGroups = true;
        $scope.init = function() {
            if(securityService.userAllowedToManageDefaultGroups()){
                $scope.groupsLoading = true;
                $scope.ssoName = securityService.loginStatus.authedUser.sso_username;
                $scope.account = securityService.loginStatus.account;
                strataService.groups.list($scope.ssoName).then(function (groups) {
                    $scope.groupsLoading = false;
                    $scope.groups = groups;
                    $scope.groups.sort(function(a, b){
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    });
                }, function (error) {
                    $scope.groupsLoading = false;
                    AlertService.addStrataErrorMessage(error);
                });
            }else{
                $scope.usersLoading = false;
                $scope.groupsLoading = false;
                $scope.userCanManageDefaultGroups = false;
            }
        };

        $scope.validatePage = function () {
            if ($scope.selectedGroup.name !== undefined && $scope.selectedUser.sso_username !== undefined) {
                $scope.usersAndGroupsFinishedLoading = true;
            } else {
                $scope.usersAndGroupsFinishedLoading = false;
            }
        };

        $scope.defaultGroupChanged = function () {
            $scope.usersLoading = true;
            $scope.usersOnAccount = [];
            $scope.selectedUser.sso_username = undefined;
            strataService.accounts.users($scope.account.number, $scope.selectedGroup.number).then(function (users) {
                $scope.usersLoading = false;
                $scope.usersLoaded = true;
                for (var i=0; i<users.length; i++) {
                    if (users[i].write) {
                        $scope.usersOnAccount.push(users[i]);
                    }
                }
                $scope.usersOnAccount.sort(function(a, b){
                    if(a.sso_username < b.sso_username) { return -1; }
                    if(a.sso_username > b.sso_username) { return 1; }
                    return 0;
                });
            }, function (error) {
                $scope.usersLoading = false;
                AlertService.addStrataErrorMessage(error);
            });
            $scope.validatePage();
        };

        $scope.setDefaultGroup = function () {
            //Remove old group is_default
            var tmpGroup = {
                name: $scope.selectedGroup.name,
                number: $scope.selectedGroup.number,
                isDefault: true,
                contactSsoName: $scope.selectedUser.sso_username
            };
            strataService.groups.createDefault(tmpGroup).then(function () {
                $scope.usersAndGroupsFinishedLoading = false;
                AlertService.clearAlerts();
                AlertService.addSuccessMessage(gettextCatalog.getString('Successfully set {{groupName}} as {{userName}}\'s default group.',{groupName:tmpGroup.name,userName:$scope.selectedUser.sso_username}));

            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };

        $scope.back = function(){
            $location.path('/case/group');
        };

        if (securityService.loginStatus.isLoggedIn) {
            $scope.init();

        }
        $scope.$on(AUTH_EVENTS.loginSuccess, function () {
            $scope.init();
        });

        $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
            $scope.selectedGroup = {};
            $scope.usersOnScreen = [];
            $scope.usersOnAccount = [];
            $scope.accountNumber = null;
        });
    }
]);

'use strict';
/*global $ */
angular.module('RedhatAccess.cases').controller('DeleteGroupButton', [
    '$scope',
    'strataService',
    'AlertService',
    'CaseService',
    'securityService',
    '$q',
    '$filter',
    'GroupService',
    'gettextCatalog',
    function ($scope, strataService, AlertService, CaseService, securityService, $q, $filter, GroupService, gettextCatalog) {
        $scope.GroupService = GroupService;
        $scope.deleteGroups = function () {
            var promises = [];
            angular.forEach(CaseService.groups, function (group, index) {
                if (group.selected) {
                    var promise = strataService.groups.remove(group.number, securityService.loginStatus.authedUser.sso_username);
                    promise.then(function (success) {
                        var groups = $filter('filter')(CaseService.groups, function (g) {
                                if (g.number !== group.number) {
                                    return true;
                                } else {
                                    return false;
                                }
                            });
                        CaseService.groups = groups;
                        GroupService.disableDeleteGroup = true;
                        GroupService.reloadTable();
                        AlertService.clearAlerts();
                        AlertService.addSuccessMessage(gettextCatalog.getString('Successfully deleted group {{groupName}}',{groupName:group.name}));
                    }, function (error) {
                        AlertService.addStrataErrorMessage(error);
                    });
                    promises.push(promise);
                }
            });
            AlertService.addWarningMessage('Deleting groups...');
            var parentPromise = $q.all(promises);
            parentPromise.then(function (success) {
                AlertService.clearAlerts();
                AlertService.addSuccessMessage(gettextCatalog.getString('Successfully deleted groups.'));
            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };
    }
]);

'use strict';
angular.module('RedhatAccess.cases').controller('DescriptionSection', [
    '$scope',
    '$modal',
    'CaseService',
    'CASE_EVENTS',
    'gettextCatalog',
    function ($scope, $modal, CaseService, CASE_EVENTS, gettextCatalog) {
        $scope.CaseService = CaseService;

        $scope.updateCase = function(){
            CaseService.confirmationModal = CASE_EVENTS.caseStatusChanged;
            CaseService.confirmationModalHeader = gettextCatalog.getString('Case status was changed.');
            CaseService.confirmationModalMessage = gettextCatalog.getString('Are you sure you want to change this case status to {{statusName}}?',{statusName:CaseService.kase.status.name});
        	$modal.open({
                templateUrl: 'cases/views/commonConfirmationModal.html',
                controller: 'CommonConfirmationModal'
            });
        };

        $scope.updateSeverity = function(){
            CaseService.confirmationModal = CASE_EVENTS.caseSeverityChanged;
            CaseService.confirmationModalHeader = gettextCatalog.getString('Case severity was changed.');
            CaseService.confirmationModalMessage = gettextCatalog.getString('Are you sure you want to change this case severity to {{severityName}}?',{severityName:CaseService.kase.severity.name});
            $modal.open({
                templateUrl: 'cases/views/commonConfirmationModal.html',
                controller: 'CommonConfirmationModal'
            });
        };
    }
]);

'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').controller('DetailsSection', [
    '$scope',
    'strataService',
    'CaseService',
    'securityService',
    'ProductsService',
    'AUTH_EVENTS',
    'CASE_EVENTS',
    'AlertService',
    'RHAUtils',
    function ($scope, strataService, CaseService, securityService, ProductsService, AUTH_EVENTS, CASE_EVENTS, AlertService, RHAUtils) {
        $scope.showExtraInfo = false;
	    $scope.CaseService = CaseService;
        $scope.securityService = securityService;
        $scope.maxNotesLength = '255';
        $scope.progressCount = 0;
        $scope.caseSummaryEditable = false;

		$scope.toggleExtraInfo = function() {
			$scope.showExtraInfo = !$scope.showExtraInfo;

		};

        $scope.resetData = function(){
            CaseService.resetCase();
            ProductsService.getVersions(CaseService.kase.product);
            $scope.detailsForm.$setPristine();
        };

        $scope.init = function () {
            if (!$scope.compact) {
                strataService.values.cases.types().then(function (response) {
                    $scope.caseTypes = response;
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                });
                var contact = securityService.loginStatus.authedUser.sso_username;
                if (securityService.loginStatus.authedUser.is_internal) {
                    if (RHAUtils.isNotEmpty(CaseService.kase.contact_sso_username)) {
                        contact = CaseService.kase.contact_sso_username; // When internal user views case of another account
                    }
                }
                strataService.groups.list(contact).then(function (response) {
                    $scope.groups = response;
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                });
            }
            strataService.values.cases.status().then(function (response) {
                CaseService.statuses = response;
            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
            strataService.values.cases.severity().then(function (response) {
                CaseService.severities = response;
            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
            ProductsService.getProducts(false);
            $scope.userIsCaseOwner = true;
            var ownerOptions = [];
            //Assuming the full name matches the owner name, strata does not support getting that through case object
            var fullName = securityService.loginStatus.authedUser.first_name+' '+securityService.loginStatus.authedUser.last_name;
            if (fullName !== CaseService.kase.owner && securityService.loginStatus.authedUser.is_internal){
                $scope.userIsCaseOwner = false;
                ownerOptions.push({
                    value: securityService.loginStatus.authedUser.sso_username,
                    label: fullName
                },{
                    value: CaseService.kase.owner,
                    label: CaseService.kase.owner
                });
            }
            $scope.owners = ownerOptions;
        };


        $scope.$watch('CaseService.kase.notes', function() {
            $scope.maxCharacterCheck();
        });
        $scope.maxCharacterCheck = function() {

            if (CaseService.kase.notes !== undefined ) {

                $scope.progressCount = CaseService.kase.notes.length;
            }
        };

        $scope.updatingDetails = false;
        $scope.updateCase = function () {
            $scope.updatingDetails = true;
            if (CaseService.kase !== undefined) {
                CaseService.updateCase().then(function () {
                    $scope.updatingDetails = false;
                    $scope.detailsForm.$setPristine();
                    $scope.summaryForm.$setPristine();
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                    $scope.updatingDetails = false;
                });
            } else {
                if ($scope.caseDetails.owner !== undefined && $scope.caseDetails.owner.$dirty) {
                    $scope.changeCaseOwner();
                }
            }
        };
        $scope.changeCaseOwner = function () {
            strataService.cases.owner.update(CaseService.kase.case_number,CaseService.kase.owner).then(function () {
                CaseService.kase.owner = securityService.loginStatus.authedUser.first_name+' '+securityService.loginStatus.authedUser.last_name;
                $scope.userIsCaseOwner = true;
                $scope.updatingDetails = false;
                $scope.caseDetails.$setPristine();
                if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
                    $scope.$apply();
                }
            }, function (error) {
                $scope.updatingDetails = false;
                AlertService.addStrataErrorMessage(error);
            });
        };
        $scope.caseDetailsChanged = function () {
            if ($scope.caseDetails.alternate_id.$dirty || $scope.caseDetails.product.$dirty
                    || $scope.caseDetails.version.$dirty || $scope.caseDetails.group.$dirty) {
                return true;
            } else {
                return false;
            }
        };
        $scope.editCaseSummary = function (editSummary) {
            if (editSummary === true) {
                $scope.caseSummaryEditable = true;
            } else {
                CaseService.kase.summary = CaseService.prestineKase.summary;
                $scope.caseSummaryEditable = false;
            }

        };
        $scope.validatePage = function () {
            if (ProductsService.versionLoading) {
                return true;
            } else {
                if (RHAUtils.isEmpty(CaseService.kase.product) || RHAUtils.isEmpty(CaseService.kase.version)) {
                    return true;
                } else if (RHAUtils.isNotEmpty(CaseService.kase.version) && (ProductsService.versions.indexOf(CaseService.kase.version) === -1)) {
                    return true;
                } else {
                    return false;
                }
            }
        };
        if (CaseService.caseDataReady) {
            $scope.init();
        }
        $scope.$on(CASE_EVENTS.received, function () {
            $scope.init();
            //AlertService.clearAlerts();
        });
    }
]);

'use strict';
/*jshint unused:vars */
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').controller('DiscussionSection', [
    '$scope',
    '$timeout',
    'AttachmentsService',
    'CaseService',
    'DiscussionService',
    'strataService',
    'securityService',
    '$stateParams',
    'AlertService',
    '$modal',
    '$location',
    '$anchorScroll',
    'RHAUtils',
    'EDIT_CASE_CONFIG',
    'AUTH_EVENTS',
    'CASE_EVENTS',
    '$sce',
    'gettextCatalog',
    '$filter',
    function ($scope, $timeout, AttachmentsService, CaseService, DiscussionService, strataService,securityService, $stateParams, AlertService, $modal, $location, $anchorScroll, RHAUtils, EDIT_CASE_CONFIG, AUTH_EVENTS, CASE_EVENTS, $sce, gettextCatalog, $filter) {
        $scope.AttachmentsService = AttachmentsService;
        $scope.CaseService = CaseService;
        $scope.securityService = securityService;
        $scope.ie8 = window.ie8;
        $scope.ie9 = window.ie9;
        $scope.noteCharactersLeft = 255;
        $scope.EDIT_CASE_CONFIG = EDIT_CASE_CONFIG;
        $scope.discussion = true;
        $scope.attachments = false;
        $scope.notes = false;
        $scope.bugzillas = false;
        $scope.hasScrolled = false;
        $scope.commentSortOrder = true;
        $scope.commentSortOrderList = [
            {
                name: gettextCatalog.getString('Newest to Oldest'),
                sortOrder: 'DESC'
            },
            {
                name: gettextCatalog.getString('Oldest to Newest'),
                sortOrder: 'ASC'
            }
        ];

        $scope.DiscussionService = DiscussionService;

        var scroll = function(commentId){
            $timeout(function() {
                if(!$scope.hasScrolled && angular.element(commentId)){
                    CaseService.scrollToComment(commentId);
                }
                else{
                    scroll(commentId);
                }
            }, 150);
        };

        $scope.init = function() {
            DiscussionService.getDiscussionElements($stateParams.id).then(angular.bind(this, function () {
                if($location.search().commentId !== undefined){
                    scroll($location.search().commentId);
                }
            }, function (error) {
            }));
        };

        if (securityService.loginStatus.isLoggedIn) {
            $scope.init();
        }
        $scope.authLoginEvent = $scope.$on(AUTH_EVENTS.loginSuccess, function () {
            $scope.init();
        });

        $scope.commentReply = function(comment) {
            var truncatedText=comment.text.substring(0,1000);
            var person = comment.created_by;
            var lines = truncatedText.split(/\n/);
            truncatedText = gettextCatalog.getString('(In reply to {{personName}})',{personName:person}) +'\n';
            for (var i = 0, max = lines.length; i < max; i++) {
               truncatedText = truncatedText + '> ' + lines[i] + '\n';
            }
            var commentsSection = document.getElementById('tab_list');
            if (commentsSection) {
                    commentsSection.scrollIntoView(true);
            }
            CaseService.commentText = truncatedText;
        };

        if (securityService.loginStatus.isLoggedIn) {
            DiscussionService.getDiscussionElements($stateParams.id);
        }

        $scope.requestManagementEscalation = function () {
            $modal.open({
                templateUrl: 'cases/views/requestManagementEscalationModal.html',
                controller: 'RequestManagementEscalationModal'
            });
        };

        $scope.deleteAttachment = function(element){
            AttachmentsService.removeOriginalAttachment(element);
        };

        $scope.maxNotesCharacterCheck = function() {
            if (CaseService.kase.notes !== undefined ) {
                $scope.noteCharactersLeft = 255 - CaseService.kase.notes.length;
            }
        };

        $scope.$watch('AttachmentsService.originalAttachments', function () {
            DiscussionService.updateElements();
            if(AttachmentsService.originalAttachments.length ===0 ){ //if we are deleting last attachment, we should default to case discussion tab
                $scope.toggleDiscussion();
            }
        }, true);
        $scope.$watch('CaseService.comments', function () {
            DiscussionService.updateElements();
        }, true);
        $scope.$watch('CaseService.kase.notes', function() {
            $scope.maxNotesCharacterCheck();
        }, true);

        $scope.updateNotes = function(){
            CaseService.updateCase().then(angular.bind(this, function () {
                this.notesForm.$setPristine();
            }) ,angular.bind(this, function (error) {
                AlertService.addStrataErrorMessage(error);
            }));
        };
        $scope.discardNotes = function(){
            CaseService.kase.notes = CaseService.prestineKase.notes;
            this.notesForm.$setPristine();
        };
        $scope.toggleDiscussion = function(){
            $scope.discussion = true;
            $scope.attachments = false;
            $scope.notes = false;
            $scope.bugzillas = false;
        };
        $scope.toggleAttachments= function(){
            $scope.discussion = false;
            $scope.attachments = true;
            $scope.notes = false;
            $scope.bugzillas = false;
        };
        $scope.toggleNotes = function(){
            $scope.discussion = false;
            $scope.attachments = false;
            $scope.notes = true;
            $scope.bugzillas = false;
        };
        $scope.toggleBugzillas = function(){
            $scope.discussion = false;
            $scope.attachments = false;
            $scope.notes = false;
            $scope.bugzillas = true;
        };

        $scope.$on('$locationChangeSuccess', function(){
            var splitUrl = $location.path().split('/');
            if(splitUrl[2] !== undefined && $location.path().search(/case\/[0-9]{1,8}/i) !== -1){
                var newCaseId = splitUrl[2];
                var oldCaseId = $scope.CaseService.kase.case_number;
                if(newCaseId !== oldCaseId){
                    $stateParams.id = newCaseId;
                    CaseService.clearCase();
                    $scope.init();
                }
            }
        });

        $scope.$on(CASE_EVENTS.received, function () {
            if (CaseService.kase.chats !== undefined && CaseService.kase.chats.chat !== undefined) {
                angular.forEach(CaseService.kase.chats.chat, angular.bind(this, function (chat) {
                    chat.last_modified_date = chat.start_date;
                    chat.last_modified_time = chat.start_time;
                    chat.comment_type = 'chat';
                    DiscussionService.chatTranscriptList.push(chat);
                }));
            } else {
                DiscussionService.chatTranscriptList = [];
            }
            DiscussionService.updateElements();
        });

        $scope.parseCommentHtml = function (comment) {
            var parsedHtml = '';
            if (comment.body !== undefined) {
                if (RHAUtils.isNotEmpty(comment.body)) {
                    var rawHtml = comment.body.toString();
                    parsedHtml = $sce.trustAsHtml(rawHtml);
                }
            } else if (comment.text !== undefined) {
                if (RHAUtils.isNotEmpty(comment.text)) {
                    parsedHtml = $filter('linky')(comment.text,'_blank');
                }
            }
            return parsedHtml;
        };

        $scope.onSortOrderChange = function () {
            if (RHAUtils.isNotEmpty(DiscussionService.commentSortOrder)) {
                if (DiscussionService.commentSortOrder.sortOrder === 'ASC') {
                    $scope.commentSortOrder = false;
                } else if (DiscussionService.commentSortOrder.sortOrder === 'DESC') {
                    $scope.commentSortOrder = true;
                }
            }
        };

    }
]);

'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').controller('Edit', [
    '$scope',
    '$stateParams',
    '$filter',
    '$q',
    '$location',
    'AttachmentsService',
    'CaseService',
    'strataService',
    'HeaderService',
    'RecommendationsService',
    '$rootScope',
    'AUTH_EVENTS',
    'AlertService',
    'securityService',
    'EDIT_CASE_CONFIG',
    'RHAUtils',
    'CASE_EVENTS',
    function ($scope, $stateParams, $filter, $q, $location, AttachmentsService, CaseService, strataService, HeaderService, RecommendationsService, $rootScope, AUTH_EVENTS, AlertService, securityService, EDIT_CASE_CONFIG, RHAUtils, CASE_EVENTS) {
        $scope.EDIT_CASE_CONFIG = EDIT_CASE_CONFIG;
        $scope.securityService = securityService;
        $scope.AttachmentsService = AttachmentsService;
        $scope.CaseService = CaseService;
        $scope.HeaderService = HeaderService;
        CaseService.clearCase();
        $scope.loading = {};
        $scope.init = function () {
            AttachmentsService.clear();
            RecommendationsService.clear();
            HeaderService.pageLoadFailure = false;
            $scope.loading.kase = true;
            $scope.recommendationsLoading = true;
            strataService.cases.get($stateParams.id).then(function (resp) {
                HeaderService.pageLoadFailure = false;
                var caseJSON = resp[0];
                var cacheHit = resp[1];
                if (!cacheHit) {
                    CaseService.defineCase(caseJSON);
                } else {
                    CaseService.setCase(caseJSON);
                }
                $rootScope.$broadcast(CASE_EVENTS.received);
                $scope.loading.kase = false;
                if (caseJSON.account_number !== undefined) {
                    strataService.accounts.get(caseJSON.account_number).then(function (account) {
                        CaseService.defineAccount(account);
                    }, function (error) {
                        AlertService.addStrataErrorMessage(error);
                    });
                }
                if (EDIT_CASE_CONFIG.showRecommendations) {
                    RecommendationsService.populatePinnedRecommendations();
                    RecommendationsService.getRecommendations(false).then(angular.noop, function (error) {
                        AlertService.addStrataErrorMessage(error);
                    });
                }
                if (EDIT_CASE_CONFIG.showEmailNotifications && !cacheHit) {
                    CaseService.defineNotifiedUsers();
                }

            }, function (error) {
                HeaderService.pageLoadFailure = true;
            });
            if (window.chrometwo_require !== undefined) {
                breadcrumbs = [
                    ['Support', '/support/'],
                    ['Support Cases',  '/support/cases/'],
                    [$stateParams.id]
                ];
                updateBreadCrumb();
            }
        };

        $scope.firePageLoadEvent = function () {
            if (window.chrometwo_require !== undefined) {
                chrometwo_require(['analytics/attributes', 'analytics/main'], function(attrs, paf) {
                    attrs.harvest();
                    paf.report();
                });
            }
        };

        if (securityService.loginStatus.isLoggedIn) {
            $scope.firePageLoadEvent();
            $scope.init();
        }
        $scope.$on(AUTH_EVENTS.loginSuccess, function () {
            $scope.firePageLoadEvent();
            $scope.init();
        });

        var caseSettled = function() {
            $scope.$broadcast('rhaCaseSettled');
        };

        $scope.loadingWatcher = $scope.$watch('loading', function(loadingObj){
            if($.isEmptyObject(loadingObj)) {
                return;
            }
            var allLoaded = true;
            for (var key in loadingObj) {
                if(loadingObj[key] !== false) {
                    allLoaded = false;
                }
            }
            if(allLoaded && !HeaderService.pageLoadFailure) {
                caseSettled();
            }
        }, true);

        $scope.loadingRecWatcher = $scope.$watch('recommendationsLoading', function(newVal) {
            if(newVal === false) {
                caseSettled();
            }
        });

        $scope.$on('$locationChangeSuccess', function(){
            var splitUrl = $location.path().split('/');
            if(splitUrl[2] !== undefined && $location.path().search(/case\/[0-9]{1,8}/i) !== -1){
                var newCaseId = splitUrl[2];
                var oldCaseId = $scope.CaseService.kase.case_number;
                if(newCaseId !== oldCaseId){
                    $stateParams.id = newCaseId;
                    CaseService.clearCase();
                    $scope.init();
                }
            }
        });
    }
]);

'use strict';
/*jshint camelcase: false*/
angular.module('RedhatAccess.cases').controller('EditCaseRecommendationsController', [
    'RecommendationsService',
    '$scope',
    'strataService',
    'CaseService',
    'AlertService',
    function (RecommendationsService, $scope, strataService, CaseService, AlertService) {
        $scope.RecommendationsService = RecommendationsService;
        $scope.currentRecPin = {};
        $scope.itemsPerPage = 3;

        $scope.pinnedResults = {};
        $scope.handPickedResults = {};
        $scope.results = {};
        $scope.pinnedResultsPage = 1;
        $scope.handPickedResultsPage = 1;
        $scope.resultsPage = 1;
        $scope.isHandpickedSolutionsOpen = {val:false};
        $scope.isTopSolutionsOpen = {val:true};
        $scope.isPinnedSolutionsOpen = {val:false};

        $scope.selectPage = function (pageNum, recommendationsList, results) {
            var start = $scope.itemsPerPage * (pageNum - 1);
            var end = start + $scope.itemsPerPage;
            end = end > recommendationsList.length ? recommendationsList.length : end;
            results.array = recommendationsList.slice(start, end);
        };

        $scope.findLastPage = function (recommendationsList) {
            return Math.ceil(recommendationsList.length / $scope.itemsPerPage);
        };
        $scope.pinRecommendation = function (recommendation) {
            $scope.currentRecPin = recommendation;
            $scope.currentRecPin.pinning = true;
            var doPut = function (linked) {
                var recJSON = {
                    recommendations: {
                        recommendation: [{
                            linked: linked.toString(),
                            resourceId: recommendation.resource_id,
                            resourceType: recommendation.resource_type
                        }]
                    }
                };
                strataService.cases.put(CaseService.kase.case_number, recJSON).then(function () {
                    if (!$scope.currentRecPin.pinned) {
                        //not currently pinned, so add it to the pinned list
                        RecommendationsService.pinnedRecommendations.push($scope.currentRecPin);
                    } else {
                        //currently pinned, so remove from pinned list
                        angular.forEach(RecommendationsService.pinnedRecommendations, function (rec, index) {
                            if (rec.resource_id === $scope.currentRecPin.resource_id) {
                                RecommendationsService.pinnedRecommendations.splice(index, 1);
                                //after removal of recommendation from list, we should check for last page possibility if the current page is greater than last page, we should navigate to previous page
                                if($scope.findLastPage(RecommendationsService.pinnedRecommendations) < $scope.pinnedResultsPage && $scope.pinnedResultsPage > 1) {
                                    $scope.pinnedResultsPage = $scope.pinnedResultsPage - 1;
                                }
                            }
                        });

                        //add the de-pinned rec to the top of the list
                        //this allows the user to still view the rec, or re-pin it
                        //RecommendationsService.recommendations.splice(0, 0, $scope.currentRecPin);
                    }
                    $scope.currentRecPin.pinning = false;
                    $scope.currentRecPin.pinned = !$scope.currentRecPin.pinned;

                    //we need to update top solution section with pinned/unpinned recommendation
                    angular.forEach(RecommendationsService.recommendations, function (rec, index) {
                        if (rec.resource_id === $scope.currentRecPin.resource_id) {
                            RecommendationsService.recommendations[index] = $scope.currentRecPin;
                        }
                    });
                }, function (error) {
                    $scope.currentRecPin.pinning = false;
                    AlertService.addStrataErrorMessage(error);
                });
            };
            if (recommendation.pinned) {
                doPut(false);
            } else {
                doPut(true);
            }
        };
        $scope.triggerAnalytics = function ($event) {
            if (window.chrometwo_require !== undefined) {
                chrometwo_require(['analytics/main'], function (analytics) {
                    analytics.trigger('CaseViewRecommendationClick', $event);
                });
            }
        };
        $scope.increment = function(page){
            $scope[page] = $scope[page] + 1;
        };

        $scope.decrement = function(page){
            $scope[page] = $scope[page] - 1;
        };
        $scope.$watch(function () {
            return RecommendationsService.recommendations;
        }, function () {
            $scope.selectPage($scope.resultsPage, RecommendationsService.recommendations, $scope.results);
        }, true);
        $scope.$watch(function () {
            return RecommendationsService.pinnedRecommendations;
        }, function () {
            $scope.selectPage($scope.pinnedResultsPage, RecommendationsService.pinnedRecommendations, $scope.pinnedResults);
        }, true);
        $scope.$watch(function () {
            return RecommendationsService.handPickedRecommendations;
        }, function () {
            $scope.selectPage($scope.handPickedResultsPage, RecommendationsService.handPickedRecommendations, $scope.handPickedResults);
        }, true);
    }
]);

'use strict';
/*global $ */
/*jshint expr: true, camelcase: false, newcap: false */
angular.module('RedhatAccess.cases').controller('EditGroup', [
    '$scope',
    'strataService',
    'CaseService',
    'AlertService',
    '$filter',
    'ngTableParams',
    'GroupUserService',
    'SearchBoxService',
    '$location',
    'securityService',
    'RHAUtils',
    'AUTH_EVENTS',
    'gettextCatalog',
    'CASE_EVENTS',
    function ($scope, strataService, CaseService, AlertService, $filter, ngTableParams, GroupUserService, SearchBoxService, $location, securityService, RHAUtils, AUTH_EVENTS, gettextCatalog, CASE_EVENTS) {
        $scope.GroupUserService = GroupUserService;
        $scope.CaseService = CaseService;
        $scope.listEmpty = false;
        $scope.selectedGroup = {};
        $scope.usersOnScreen = [];
        $scope.usersOnAccount = [];
        $scope.accountNumber = null;
        $scope.isUsersPrestine = true;
        $scope.isGroupPrestine = true;

        var reloadTable = false;
        var tableBuilt = false;
        var buildTable = function () {
            $scope.tableParams = new ngTableParams({
                page: 1,
                count: 10,
                sorting: { sso_username: 'asc' }
            }, {
                total: $scope.usersOnAccount.length,
                getData: function ($defer, params) {
                    var orderedData = $filter('filter')($scope.usersOnAccount, SearchBoxService.searchTerm);
                    orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                    orderedData.length < 1 ? $scope.listEmpty = true : $scope.listEmpty = false;
                    var pageData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    $scope.tableParams.total(orderedData.length);
                    $scope.usersOnScreen = pageData;
                    $defer.resolve(pageData);
                }
            });
            $scope.tableParams.settings().$scope = $scope;
            GroupUserService.reloadTable = function () {
                $scope.tableParams.reload();
            };
            tableBuilt = true;
        };

        $scope.$on(CASE_EVENTS.searchBoxChange, function () {
            $scope.tableParams.reload();
        });

        $scope.init = function() {
            if(securityService.userAllowedToManageGroups()){
                SearchBoxService.searchTerm='';
                var loc = $location.url().split('/');
                $scope.accountNumber = securityService.loginStatus.authedUser.account_number;
                strataService.groups.get(loc[3], securityService.loginStatus.authedUser.sso_username).then(function (group) {
                    $scope.selectedGroup = group;
                    strataService.accounts.users($scope.accountNumber, $scope.selectedGroup.number).then(function (users) {
                        $scope.usersOnAccount = users;
                        buildTable();
                        $scope.usersLoading = false;
                        if(reloadTable){
                            reloadTable = false;
                        }
                    }, function (error) {
                        $scope.usersLoading = false;
                        AlertService.addStrataErrorMessage(error);
                    });
                }, function (error) {
                    $scope.usersLoading = false;
                    AlertService.addStrataErrorMessage(error);
                });
            }else{
                $scope.usersLoading = false;
                AlertService.addStrataErrorMessage(gettextCatalog.getString('User does not have proper credentials to manage case groups.'));
            }
        };
        $scope.saveGroup = function () {
            var userName = securityService.loginStatus.authedUser.sso_username;
            if(!$scope.isGroupPrestine){
                strataService.groups.update($scope.selectedGroup, userName).then(function () {
                    AlertService.clearAlerts();
                    AlertService.addSuccessMessage(gettextCatalog.getString('Case group successfully updated.'));
                    $scope.isGroupPrestine = true;
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                });
            }
            if(!$scope.isUsersPrestine){
                strataService.groupUsers.update($scope.usersOnAccount, $scope.accountNumber, $scope.selectedGroup.number).then(function() {
                    $scope.isUsersPrestine = true;
                    AlertService.clearAlerts();
                    AlertService.addSuccessMessage(gettextCatalog.getString('Case users successfully updated.'));
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                });
            }
        };

        $scope.onMasterReadCheckboxClicked = function (masterReadSelected) {
            for(var i = 0; i < $scope.usersOnAccount.length; i++){
                if (!$scope.usersOnAccount[i].org_admin) {
                    $scope.usersOnAccount[i].access = masterReadSelected;
                }
            }
            $scope.isUsersPrestine = false;
        };

        $scope.onMasterWriteCheckboxClicked = function (masterWriteSelected) {
            for(var i = 0; i < $scope.usersOnAccount.length; i++){
                if (!$scope.usersOnAccount[i].org_admin) {
                    $scope.usersOnAccount[i].write = masterWriteSelected;
                }
            }
            $scope.isUsersPrestine = false;
        };

        $scope.writeAccessToggle = function(user){
            if(user.write && !user.access){
                user.access = true;
            }
            $scope.isUsersPrestine = false;
        };

        $scope.cancel = function(){
            $location.path('/case/group');
        };

        $scope.toggleUsersPrestine = function(){
            $scope.isUsersPrestine = false;
        };

        $scope.toggleGroupPrestine = function(){
            $scope.isGroupPrestine = false;
        };

        $scope.usersLoading = true;
        if (securityService.loginStatus.isLoggedIn) {
            $scope.init();

        } else {
            $scope.$on(AUTH_EVENTS.loginSuccess, function () {
                $scope.init();
            });
        }

        $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
            $scope.selectedGroup = {};
            $scope.usersOnScreen = [];
            $scope.usersOnAccount = [];
            $scope.accountNumber = null;
            reloadTable = true;
        });
    }
]);

/*global angular*/
/*jshint camelcase: false*/
'use strict';
angular.module('RedhatAccess.cases').controller('EmailNotifySelect', [
    '$scope',
    'CaseService',
    'securityService',
    'AlertService',
    'strataService',
    'CASE_EVENTS',
    '$filter',
    'RHAUtils',
    'EDIT_CASE_CONFIG',
    'AUTH_EVENTS',
    function ($scope, CaseService, securityService, AlertService, strataService,CASE_EVENTS, $filter, RHAUtils,EDIT_CASE_CONFIG, AUTH_EVENTS) {
        $scope.securityService = securityService;
        $scope.CaseService = CaseService;
        $scope.showEmailNotifications = EDIT_CASE_CONFIG.showEmailNotifications;
        $scope.updateNotifyUsers = function () {
            if (!angular.equals(CaseService.updatedNotifiedUsers, CaseService.originalNotifiedUsers)) {
                angular.forEach(CaseService.originalNotifiedUsers, function (origUser) {
                    var updatedUser = $filter('filter')(CaseService.updatedNotifiedUsers, origUser);
                    if (RHAUtils.isEmpty(updatedUser)) {
                        $scope.updatingList = true;
                        strataService.cases.notified_users.remove(CaseService.kase.case_number, origUser).then(function () {
                            $scope.updatingList = false;
                            CaseService.originalNotifiedUsers = CaseService.updatedNotifiedUsers;
                        }, function (error) {
                            $scope.updatingList = false;
                            AlertService.addStrataErrorMessage(error);
                        });
                    }
                });
                angular.forEach(CaseService.updatedNotifiedUsers, function (updatedUser) {
                    var originalUser = $filter('filter')(CaseService.originalNotifiedUsers, updatedUser);
                    if (RHAUtils.isEmpty(originalUser)) {
                        $scope.updatingList = true;
                        strataService.cases.notified_users.add(CaseService.kase.case_number, updatedUser).then(function () {
                            CaseService.originalNotifiedUsers = CaseService.updatedNotifiedUsers;
                            $scope.updatingList = false;
                        }, function (error) {
                            $scope.updatingList = false;
                            AlertService.addStrataErrorMessage(error);
                        });
                    }
                });
            }
        };
        if (CaseService.caseDataReady) {
            CaseService.populateUsers();
        }
        $scope.$on(CASE_EVENTS.received, function () {
            CaseService.populateUsers();
        });

    }
]);

'use strict';
angular.module('RedhatAccess.cases').controller('EntitlementSelect', [
    '$scope',
    'strataService',
    'AlertService',
    '$filter',
    'RHAUtils',
    'CaseService',
    function ($scope, strataService, AlertService, $filter, RHAUtils, CaseService) {
        $scope.CaseService = CaseService;
        CaseService.populateEntitlements();
    }
]);
'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').controller('ExportCSVButton', [
    '$scope',
    'strataService',
    'AlertService',
    function ($scope, strataService, AlertService) {
        $scope.ie8 = window.ie8;
        $scope.ie9 = window.ie9;
        $scope.exporting = false;
        $scope.exports = function () {
            $scope.exporting = true;
            strataService.cases.csv().then(function (response) {
                $scope.exporting = false;
            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };
    }
]);
/*jshint camelcase: false */
'use strict';
angular.module('RedhatAccess.cases').controller('FilterSelect', [
    '$scope',
    'securityService',
    'CaseService',
    'STATUS',
    'ConstantsService',
    function ($scope, securityService, CaseService, STATUS,  ConstantsService) {
        $scope.securityService = securityService;
        $scope.CaseService = CaseService;
        $scope.ConstantsService = ConstantsService;
        $scope.STATUS = STATUS;
        $scope.init = function() {
            CaseService.filterSelect = ConstantsService.sortByParams[0];
            if(CaseService.localStorageCache) {
                if (CaseService.localStorageCache.get('filterSelect'+securityService.loginStatus.authedUser.sso_username)) {
                    var filterSelectCache = CaseService.localStorageCache.get('filterSelect'+securityService.loginStatus.authedUser.sso_username);
                    CaseService.setFilterSelectModel(filterSelectCache.sortField,filterSelectCache.sortOrder);
                }
            }
        };
    }
]);

'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').controller('Group', [
    '$scope',
    '$location',
    'securityService',
    'SearchBoxService',
    'GroupService',
    'CASE_EVENTS',
    function ($scope, $location, securityService, SearchBoxService, GroupService, CASE_EVENTS) {
        $scope.securityService = securityService;

        $scope.$on(CASE_EVENTS.searchBoxChange, function () {
            $scope.onChange();
        });
        $scope.$on(CASE_EVENTS.searchSubmit, function () {
            $scope.onChange();
        });
        $scope.onChange = function () {
            GroupService.reloadTable();
        };
        SearchBoxService.onKeyPress = function () {
            GroupService.reloadTableAndClearPagination();
        };
        $scope.defaultCaseGroup = function(){
            $location.path('/case/group/default');
        };
    }
]);
'use strict';
/*global $ */
/*jshint expr: true, camelcase: false, newcap: false*/
angular.module('RedhatAccess.cases').controller('GroupList', [
    '$scope',
    'strataService',
    'AlertService',
    'CaseService',
    '$filter',
    'ngTableParams',
    'GroupService',
    'securityService',
    'SearchBoxService',
    'AUTH_EVENTS',
    function ($scope, strataService, AlertService, CaseService, $filter, ngTableParams, GroupService, securityService, SearchBoxService, AUTH_EVENTS) {
        $scope.CaseService = CaseService;
        $scope.GroupService = GroupService;
        $scope.listEmpty = false;
        $scope.groupsOnScreen = [];
        $scope.canManageGroups = false;
        var reloadTable = false;
        var tableBuilt = false;
        $scope.groupsLoading = true;
        var buildTable = function () {
            $scope.tableParams = new ngTableParams({
                page: 1,
                count: 10,
                sorting: { name: 'asc' }
            }, {
                total: CaseService.groups.length,
                getData: function ($defer, params) {
                    var orderedData = $filter('filter')(CaseService.groups, {name:SearchBoxService.searchTerm});
                    orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                    orderedData.length < 1 ? $scope.listEmpty = true : $scope.listEmpty = false;
                    var pageData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    $scope.tableParams.total(orderedData.length);
                    GroupService.groupsOnScreen = pageData;
                    $defer.resolve(pageData);
                }
            });
            $scope.tableParams.settings().$scope = $scope;
            GroupService.reloadTable = function () {
                $scope.tableParams.reload();
            };
            GroupService.reloadTableAndClearPagination = function () {
                if($scope.tableParams !== undefined){
                    $scope.tableParams.$params.page = 1;
                }
                $scope.tableParams.reload();
            };
            tableBuilt = true;
        };

        $scope.onMasterCheckboxClicked = function () {
            for (var i = 0; i < GroupService.groupsOnScreen.length; i++) {
                if (this.masterSelected) {
                    GroupService.groupsOnScreen[i].selected = true;
                    GroupService.disableDeleteGroup = false;
                } else {
                    GroupService.groupsOnScreen[i].selected = false;
                    GroupService.disableDeleteGroup = true;
                }
            }
        };
        CaseService.clearCase();

        $scope.init = function() {
            SearchBoxService.searchTerm='';
            var userName = securityService.loginStatus.authedUser.sso_username;
            strataService.groups.list(userName, false).then(function (groups) {
                CaseService.groups = groups;
                $scope.canManageGroups = securityService.loginStatus.account.has_group_acls && securityService.loginStatus.authedUser.org_admin;
                $scope.groupsLoading = false;
                buildTable();
                if(reloadTable){
                    //GroupService.reloadTable();
                    reloadTable = false;
                }
            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };

        $scope.onGroupSelected = function() {
            var disableDeleteGroup = true;
            for (var i = 0; i < GroupService.groupsOnScreen.length; i++) {
                if (GroupService.groupsOnScreen[i].selected === true) {
                    disableDeleteGroup = false;
                    break;
                }
            }
            GroupService.disableDeleteGroup = disableDeleteGroup;
        };

        if (securityService.loginStatus.isLoggedIn) {
            $scope.init();

        }
        $scope.$on(AUTH_EVENTS.loginSuccess, function () {
            $scope.init();
        });

        $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
            CaseService.clearCase();
            $scope.groupsOnScreen = [];
            GroupService.groupsOnScreen = [];
            reloadTable = true;
        });
    }
]);
/*jshint camelcase: false */
'use strict';
angular.module('RedhatAccess.cases').constant('CASE_GROUPS', {
    manage: 'manage',
    ungrouped: 'ungrouped'
}).controller('GroupSelect', [
    '$scope',
    'securityService',
    'SearchCaseService',
    'CaseService',
    'strataService',
    'AlertService',
    'CASE_GROUPS',
    'AUTH_EVENTS',
    function ($scope, securityService, SearchCaseService, CaseService, strataService, AlertService, CASE_GROUPS, AUTH_EVENTS) {
        $scope.securityService = securityService;
        $scope.SearchCaseService = SearchCaseService;
        $scope.CaseService = CaseService;
        $scope.CASE_GROUPS = CASE_GROUPS;

        $scope.setSearchOptions = function (showsearchoptions) {
            CaseService.showsearchoptions = showsearchoptions;
            CaseService.buildGroupOptions();
        };
    }
]);

'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').controller('List', [
    '$scope',
    '$filter',
	'$location',
	'$state',
    '$modal',
    'securityService',
    'AlertService',
    'SearchCaseService',
    'CaseService',
    'strataService',
    'AUTH_EVENTS',
    'SearchBoxService',
    'NEW_CASE_CONFIG',
    'CASE_EVENTS',
    'CASE_GROUPS',
    'STATUS',
    'gettextCatalog',
    function ($scope, $filter, $location, $state, $modal, securityService, AlertService, SearchCaseService, CaseService, strataService, AUTH_EVENTS, SearchBoxService, NEW_CASE_CONFIG, CASE_EVENTS, CASE_GROUPS, STATUS,gettextCatalog) {
        $scope.SearchCaseService = SearchCaseService;
        $scope.securityService = securityService;
        $scope.AlertService = AlertService;
        $scope.CaseService = CaseService;
        $scope.NEW_CASE_CONFIG = NEW_CASE_CONFIG;
	    $scope.ie8 = window.ie8;
	    $scope.ie9 = window.ie9;
	    $scope.exporting = false;
        $scope.fetching = false;
        $scope.displayedCaseText = 'Open Support Cases';
	    $scope.exports = function () {
		    $scope.exporting = true;
		    strataService.cases.csv().then(function (response) {
			    $scope.exporting = false;
                var blob = new Blob([ response ], { type : 'text/csv' });
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(blob, "caseList.csv");
                }
                else {
                    var blobURL = (window.URL || window.webkitURL).createObjectURL(blob);
                    var anchor = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                    anchor.download = "caseList.csv";
                    anchor.href = blobURL;
                    var event = document.createEvent("MouseEvents");
                    event.initEvent("click", true, false);
                    anchor.dispatchEvent(event);
                }
		    }, function (error) {
			    AlertService.addStrataErrorMessage(error);
		    });
	    };

        $scope.$on(CASE_EVENTS.searchSubmit, function () {
            $scope.doSearch();
        });

        $scope.doSearch = function () {
            SearchCaseService.clearPagination();
            if (SearchCaseService.caseParameters.group === CASE_GROUPS.manage) {
                SearchCaseService.caseParameters.group = SearchCaseService.previousGroupFilter;
                $state.go('group');
            } else {
                if(CaseService.groups.length === 0){
                    CaseService.populateGroups().then(function (){
                        if(SearchCaseService.previousGroupFilter === CASE_GROUPS.none) {
                            SearchCaseService.caseParameters.group = CaseService.group;
                        } else {
                            SearchCaseService.caseParameters.group = SearchCaseService.previousGroupFilter;
                        }
	                    SearchCaseService.doFilter();
	                });
	            } else {
                    if(SearchCaseService.previousGroupFilter === CASE_GROUPS.none) {
                        SearchCaseService.caseParameters.group = CaseService.group;
                    }
	                SearchCaseService.doFilter();
	            }
	        }
        };

        $scope.firePageLoadEvent = function () {
            if (window.chrometwo_require !== undefined) {
                chrometwo_require(['analytics/attributes', 'analytics/main'], function(attrs, paf) {
                    attrs.harvest();
                    paf.report();
                });
            }
        };

        $scope.setBreadcrumbs = function(){
            if (window.chrometwo_require !== undefined) {
                breadcrumbs = [
                    ['Support', '/support/'],
                    ['Support Cases',  '/support/cases/'],
                    ['List']
                ];
                updateBreadCrumb();
            }
        };

        /**
       * Callback after user login. Load the cases and clear alerts
       */
        if (securityService.loginStatus.isLoggedIn && securityService.loginStatus.userAllowedToManageCases) {
            $scope.firePageLoadEvent();
            //SearchCaseService.clear();
            if(CaseService.status === undefined){
                CaseService.status = 'open';
            }
            $scope.doSearch();
            $scope.setBreadcrumbs();
        }
        $scope.$on(AUTH_EVENTS.loginSuccess, function () {
            if(securityService.loginStatus.userAllowedToManageCases){
                $scope.firePageLoadEvent();
                CaseService.status = 'open';
                $scope.doSearch();
                $scope.setBreadcrumbs();
            }
        });

        $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
            CaseService.clearCase();
            SearchCaseService.clear();
        });

	    $scope.caseLink = function (caseNumber) {
		    $location.path('/case/' + caseNumber);
	    };

	    $scope.caseChosen = function() {
	        var trues = $filter('filter')( SearchCaseService.cases, {selected:true} );
	        return trues.length;
	    };

	    $scope.closeCases = function() {
            CaseService.confirmationModal = CASE_EVENTS.caseClose;
            CaseService.confirmationModalHeader = gettextCatalog.getString('Closing Cases.');
            CaseService.confirmationModalMessage = gettextCatalog.getString('Are you sure you want to close the selected cases?');
            $modal.open({
                templateUrl: 'cases/views/commonConfirmationModal.html',
                controller: 'CommonConfirmationModal'
            });
	    };

        $scope.getCasesText = function(){
            if(SearchCaseService.caseParameters.status === STATUS.open){
                $scope.displayedCaseText = gettextCatalog.getString('Open Support Cases');
            } else if(SearchCaseService.caseParameters.status === STATUS.closed){
                $scope.displayedCaseText = gettextCatalog.getString('Closed Support Cases');
            } else if(SearchCaseService.caseParameters.status === STATUS.both){
                $scope.displayedCaseText = gettextCatalog.getString('Open and Closed Support Cases');
            }
        };

        $scope.loadingRecWatcher = $scope.$watch('SearchCaseService.caseParameters.status', function(newVal) {
            $scope.getCasesText();
        });
    }
]);

'use strict';
angular.module('RedhatAccess.cases').controller('ListAttachments', [
    '$scope',
    'AttachmentsService',
    function ($scope, AttachmentsService) {
        $scope.AttachmentsService = AttachmentsService;
    }
]);
'use strict';
angular.module('RedhatAccess.cases').controller('ListBugzillas', [
    '$scope',
    'CaseService',
    'securityService',
    function ($scope, CaseService, securityService) {
        $scope.CaseService = CaseService;
        $scope.securityService = securityService;
    }
]);
'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').controller('ListFilter', [
    '$scope',
    'STATUS',
    'CaseService',
    'securityService',
    '$rootScope',
    'CASE_EVENTS',
    'SearchCaseService',
    'GroupService',
    'ConstantsService',
    'RHAUtils',
    function ($scope, STATUS, CaseService, securityService, $rootScope, CASE_EVENTS, SearchCaseService, GroupService, ConstantsService, RHAUtils) {
        $scope.securityService = securityService;
        $scope.CaseService = CaseService;
        $scope.GroupService = GroupService;
        $scope.SearchCaseService = SearchCaseService;
        $scope.ConstantsService = ConstantsService;
        CaseService.status = STATUS.open;
        $scope.showsearchoptions = CaseService.showsearchoptions;
        $scope.disableSearchButton = true;
        $scope.doSearch = function(){
            $rootScope.$broadcast(CASE_EVENTS.searchSubmit);
        }
        $scope.setSearchOptions = function (showsearchoptions) {
            CaseService.showsearchoptions = showsearchoptions;
            CaseService.buildGroupOptions();            
        };
        $scope.clearSearch = function () {
            SearchCaseService.caseParameters.searchTerm = undefined;
        };
        $scope.onChange = function(){
            if (RHAUtils.isNotEmpty(SearchCaseService.caseParameters.searchTerm)) {
                $scope.disableSearchButton = false;
            } else {
                $scope.disableSearchButton = true;
            }
        };
    }
]);
'use strict';
angular.module('RedhatAccess.cases').controller('ListNewAttachments', [
    '$scope',
    'AttachmentsService',
    'TreeViewSelectorUtils',
    function ($scope, AttachmentsService, TreeViewSelectorUtils) {
        $scope.AttachmentsService = AttachmentsService;
        $scope.TreeViewSelectorUtils = TreeViewSelectorUtils;
        $scope.removeLocalAttachment = function ($index) {
            AttachmentsService.removeUpdatedAttachment($index);
        };
    }
]);
'use strict';
/*jshint camelcase: false*/
angular.module('RedhatAccess.cases').controller('New', [
    '$scope',
    '$state',
    '$q',
    '$timeout',
    '$sanitize',
    '$modal',
    '$sce',
    'SearchResultsService',
    'AttachmentsService',
    'strataService',
    'RecommendationsService',
    'CaseService',
    'AlertService',
    'HeaderService',
    'ProductsService',
    'securityService',
    'AUTH_EVENTS',
    '$location',
    'RHAUtils',
    'NEW_DEFAULTS',
    'NEW_CASE_CONFIG',
    'CASE_EVENTS',
    'gettextCatalog',
    function ($scope, $state, $q, $timeout, $sanitize, $modal, $sce, SearchResultsService, AttachmentsService, strataService, RecommendationsService, CaseService, AlertService, HeaderService, ProductsService, securityService, AUTH_EVENTS, $location, RHAUtils, NEW_DEFAULTS, NEW_CASE_CONFIG, CASE_EVENTS, gettextCatalog) {
        $scope.NEW_CASE_CONFIG = NEW_CASE_CONFIG;
        $scope.versions = [];
        $scope.versionDisabled = true;
        $scope.versionLoading = false;
        $scope.incomplete = true;
        $scope.submitProgress = 0;
        $scope.AttachmentsService = AttachmentsService;
        CaseService.clearCase();
        RecommendationsService.clear();
        SearchResultsService.clear();
        $scope.CaseService = CaseService;
        $scope.RecommendationsService = RecommendationsService;
        $scope.securityService = securityService;
        $scope.HeaderService = HeaderService;
        $scope.ie8 = window.ie8;
        $scope.ie9 = window.ie9;
        $scope.ie8Message='We’re unable to accept file attachments from Internet Explorer 8 (IE8) at this time. Please see our instructions for providing files <a href=\"https://access.redhat.com/solutions/2112\" target="_blank\">via FTP </a> in the interim.';

        $scope.showRecommendationPanel = false;
        $scope.notifiedUsers = [];
        $scope.isControlGroup = true;
	    //$scope.hideSticky = false;

        // Instantiate these variables outside the watch
        var waiting = false;
        $scope.$watch('CaseService.kase.product + CaseService.kase.version + CaseService.kase.description + CaseService.kase.summary', function () {
            if (!waiting){
                var descriptionText = CaseService.kase.description;
                if(!$scope.isControlGroup){
                    descriptionText = CaseService.kase.problem + ' ' + CaseService.kase.environment + ' ' + CaseService.kase.occurance + ' ' + CaseService.kase.urgency;
                }
                if(RHAUtils.isNotEmpty(CaseService.kase.product) || RHAUtils.isNotEmpty(CaseService.kase.version) || RHAUtils.isNotEmpty(descriptionText) || RHAUtils.isNotEmpty(CaseService.kase.summary)){
                    if(RHAUtils.isNotEmpty(descriptionText) || RHAUtils.isNotEmpty(CaseService.kase.summary))
                    {
                        $scope.makeRecommendationPanelVisible();
                    }
                    waiting = true;
                    var descriptionText = CaseService.kase.description;
                    if(!$scope.isControlGroup){
                        if(RHAUtils.isNotEmpty(CaseService.kase.problem) && CaseService.kase.problem.length > 0){
                            descriptionText = CaseService.kase.problem;
                        }
                        if(RHAUtils.isNotEmpty(CaseService.kase.environment) && CaseService.kase.environment.length > 0){
                            if(RHAUtils.isNotEmpty(CaseService.kase.description)){
                                descriptionText = descriptionText.concat(' ');
                            }
                            descriptionText = descriptionText.concat(CaseService.kase.environment);
                        }
                        if(RHAUtils.isNotEmpty(CaseService.kase.occurance) && CaseService.kase.occurance.length > 0){
                            if(RHAUtils.isNotEmpty(CaseService.kase.description)){
                                descriptionText = descriptionText.concat(' ');
                            }
                            descriptionText = descriptionText.concat(CaseService.kase.occurance);
                        }
                        if(RHAUtils.isNotEmpty(CaseService.kase.urgency) && CaseService.kase.urgency.length > 0){
                            if(RHAUtils.isNotEmpty(CaseService.kase.description)){
                                descriptionText = descriptionText.concat(' ');
                            }
                            descriptionText = descriptionText.concat(CaseService.kase.urgency);
                        }
                    }
                    var recommendationsText = {
                        product: CaseService.kase.product,
                        version: CaseService.kase.version,
                        summary: CaseService.kase.summary,
                        description: descriptionText
                    };
                    $timeout(function() {
                        waiting = false;
                        RecommendationsService.getRecommendations(true, 6, recommendationsText);
                    }, 500); // delay 500 ms
                }
            }
        });


        $scope.$on(CASE_EVENTS.ownerChange, function () {
            if (CaseService.owner !== undefined) {
                CaseService.populateEntitlements(CaseService.owner);
                CaseService.populateGroups(CaseService.owner);
                ProductsService.getProducts(true);

                //as owner change, we might get different product and version list, so better to clear previous selection
                CaseService.clearProdVersionFromLS();
            }
        });

        /**
       * Populate the selects
       */
        $scope.initSelects = function () {
        	AttachmentsService.clear();
            CaseService.newCaseIncomplete = true;
            CaseService.clearCase();
            RecommendationsService.clear();
            ProductsService.clear();
            CaseService.populateUsers().then(function (){
                $scope.usersOnAccount = CaseService.users;
                $scope.usersOnAccount = $scope.usersOnAccount.map(function(obj) {
                    return obj.sso_username;
                });
                var index = $scope.usersOnAccount.indexOf(securityService.loginStatus.authedUser.sso_username);
                if (index > -1) {
                    $scope.usersOnAccount.splice(index, 1);
                }
        	});
            $scope.severitiesLoading = true;
            ProductsService.getProducts(false);
            CaseService.populateEntitlements(securityService.loginStatus.authedUser.sso_username);
            strataService.values.cases.severity().then(function (severities) {
                CaseService.severities = severities;
                CaseService.kase.severity = severities[severities.length - 1];
                $scope.severitiesLoading = false;
            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
            $scope.groupsLoading = true;
            CaseService.populateGroups().then(function (groups) {
                $scope.groupsLoading = false;
            }, function (error) {
                AlertService.addStrataErrorMessage(error);
            });
            if (window.chrometwo_require !== undefined) {
                breadcrumbs = [
                    ['Support', '/support/'],
                    ['Support Cases',  '/support/cases/'],
                    ['New']
                ];
                updateBreadCrumb();
            }
        };
        $scope.initDescription = function () {
            var searchObject = $location.search();
            if (RHAUtils.isNotEmpty(CaseService.localStorageCache) && CaseService.localStorageCache.get(securityService.loginStatus.authedUser.sso_username))
            {
                CaseService.kase.description = CaseService.localStorageCache.get(securityService.loginStatus.authedUser.sso_username).text;
                CaseService.kase.problem = CaseService.localStorageCache.get(securityService.loginStatus.authedUser.sso_username).problem;
                CaseService.kase.environment = CaseService.localStorageCache.get(securityService.loginStatus.authedUser.sso_username).environment;
                CaseService.kase.occurance = CaseService.localStorageCache.get(securityService.loginStatus.authedUser.sso_username).occurance;
                CaseService.kase.urgency = CaseService.localStorageCache.get(securityService.loginStatus.authedUser.sso_username).urgency;
            }
            var setDesc = function (desc) {
                CaseService.kase.description = desc;
                $scope.getRecommendations();
            };
            if(!$scope.NEW_CASE_CONFIG.isPCM) {
                if (searchObject.data) {
                    setDesc(searchObject.data);
                } else {
                    //angular does not  handle params before hashbang
                    //@see https://github.com/angular/angular.js/issues/6172
                    var queryParamsStr = window.location.search.substring(1);
                    var parameters = queryParamsStr.split('&');
                    for (var i = 0; i < parameters.length; i++) {
                        var parameterName = parameters[i].split('=');
                        if (parameterName[0] === 'data') {
                            setDesc(decodeURIComponent(parameterName[1]));
                        }
                    }
                }
            }
        };
        $scope.getLocalStorageForNewCase = function(){
            if (RHAUtils.isNotEmpty(CaseService.localStorageCache) && CaseService.localStorageCache.get(securityService.loginStatus.authedUser.sso_username))
            {
                var draftNewCase = CaseService.localStorageCache.get(securityService.loginStatus.authedUser.sso_username).text;
                CaseService.kase.description = draftNewCase.description;
                CaseService.kase.problem = draftNewCase.problem;
                CaseService.kase.environment = draftNewCase.environment;
                CaseService.kase.occurance = draftNewCase.occurance;
                CaseService.kase.urgency = draftNewCase.urgency;
                CaseService.kase.summary = draftNewCase.summary;
                if(RHAUtils.isNotEmpty(draftNewCase.product))
                {
                    //if we directly call $scope.getProductVersions function without product list in strata service it return error
                    strataService.products.list(CaseService.owner).then(function (products) {
                        CaseService.kase.product = draftNewCase.product;
                        ProductsService.getVersions(CaseService.kase.product);
                        CaseService.kase.version = draftNewCase.version; //setting version after product check, as without product, version don't have any meaning
                        CaseService.validateNewCase();
                    }, function (error) {
                        AlertService.addStrataErrorMessage(error);
                    });
                }
            }
        };

        $scope.ABTestRegister = function(){
            if(securityService.loginStatus.authedUser.account_number !== undefined){
                var testgroup = '';
                if(securityService.loginStatus.authedUser.account_number % 2 === 1){
                    testgroup = 'ABTestControl';
                    $scope.isControlGroup = true;
                } else{
                    testgroup = 'ABTestChallenger';
                    $scope.isControlGroup = false;
                }
                if (window.chrometwo_require !== undefined) {
                    chrometwo_require(['analytics/attributes', 'analytics/main'], function(attrs, paf) {
                        paf.trigger("ABTestImpression");
                        attrs.set("ABTestCampaign", ["ABTestTitle", testgroup]);
                        attrs.harvest();
                        paf.report();
                    });
                }
            }
        }

        if (securityService.loginStatus.isLoggedIn) {
            $scope.ABTestRegister();
            $scope.initSelects();
            $scope.initDescription();
            $scope.getLocalStorageForNewCase();
        }
        $scope.$on(AUTH_EVENTS.loginSuccess, function () {
            $scope.ABTestRegister();
            $scope.initSelects();
            $scope.initDescription();
            $scope.getLocalStorageForNewCase();
            //AlertService.clearAlerts();
            RecommendationsService.failureCount = 0;
        });

        $scope.submittingCase = false;

        $scope.setSearchOptions = function (showsearchoptions) {
            CaseService.showsearchoptions = showsearchoptions;
            if(CaseService.groups.length === 0){
                CaseService.populateGroups().then(function (){
                    CaseService.buildGroupOptions();
                });
            } else{
                CaseService.buildGroupOptions();
            }
        };

        $scope.scrollToRecommendations = function(){
            var recommendationsSection = document.getElementById('recommendations_section');
            if(recommendationsSection) {
                recommendationsSection.scrollIntoView(true);
            }
        };

        /**
       * Create the case with attachments
       */
        $scope.doSubmit = function ($event) {
            AttachmentsService.proceedWithoutAttachments = false;

            var redirectToCase = function (caseNumber) {
                $state.go('edit', { id: caseNumber });
                AlertService.clearAlerts();
                CaseService.submittingCase = false;
            };

            var caseUploadsAndUpdates = function(caseNumber){
                if (window.chrometwo_require !== undefined) {
                    chrometwo_require(['analytics/main'], function (analytics) {
                        analytics.trigger('OpenSupportCaseSubmit', $event);
                    });
                }
                angular.forEach($scope.notifiedUsers, function (user) {
                    var userMessage = AlertService.addWarningMessage(gettextCatalog.getString('Adding user {{userName}} to case.',{userName:user}));
                    strataService.cases.notified_users.add(caseNumber, user).then(function () {
                        AlertService.removeAlert(userMessage);
                    }, function (error) {
                        AlertService.addStrataErrorMessage(error);
                    });
                });

                if ((AttachmentsService.updatedAttachments.length > 0 || AttachmentsService.hasBackEndSelections()) && NEW_CASE_CONFIG.showAttachments) {
                    AttachmentsService.updateAttachments(caseNumber).then(function () {
                        redirectToCase(caseNumber);
                    }, function (error) {
                        AlertService.addStrataErrorMessage(error);
                        CaseService.submittingCase = false;
                    });
                } else if(NEW_CASE_CONFIG.showAttachments && $scope.ie8 || $scope.ie9 ) {
                    var fileName = document.getElementById('newFileUploader').value;
                    if(!RHAUtils.isEmpty(fileName)){
                        $scope.ieFileUpload(caseNumber);
                    } else{
                        redirectToCase(caseNumber);
                    }
                } else {
                    redirectToCase(caseNumber);
                }
            };

            if(AttachmentsService.updatedAttachments.length === 0 && !$scope.ie8 && !$scope.ie9){
                var proceedWithoutAttachModal = $modal.open({
                    templateUrl: 'cases/views/proceedWithoutAttachModal.html',
                    controller: 'ProceedWithoutAttachModal'
                });
                proceedWithoutAttachModal.result.then(function(){
                    if(AttachmentsService.proceedWithoutAttachments){
                        CaseService.createCase().then(function (caseNumber) {
                            caseUploadsAndUpdates(caseNumber);
                        }, function (error) {
                            AlertService.addStrataErrorMessage(error);
                            CaseService.submittingCase = false;
                        });
                    }
                });
            } else{
                CaseService.createCase().then(function (caseNumber) {
                    caseUploadsAndUpdates(caseNumber);
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                    CaseService.submittingCase = false;
                });
            }
        };

        $scope.getLocatingSolutionText = function(){
            var text = 'Locating top solutions';
            var numFieldsSelected = 0;
            if(!RHAUtils.isEmpty(CaseService.kase.product)){
                text = text.concat(' for ' + CaseService.kase.product);
                numFieldsSelected++;
            }
            if(!RHAUtils.isEmpty(CaseService.kase.version)){
                text = text.concat(' ' + CaseService.kase.version);
                numFieldsSelected++;
            }
            if(!RHAUtils.isEmpty(CaseService.kase.summary)){
                numFieldsSelected++;
            }
            if(!RHAUtils.isEmpty(CaseService.kase.description)){
                numFieldsSelected++;
            }

            if(numFieldsSelected > 2){
                text = text.replace('Locating', 'Refining');
            }
            if(text.indexOf('Locating') !== -1)
            {
                text=gettextCatalog.getString('Locating top solutions');
            }
            else
            {
                text=gettextCatalog.getString('Refining top solutions');
            }
            return text;
        };

        $scope.ieFileUpload = function(caseNumber) {
            var form = document.getElementById('fileUploaderForm');
            var iframeId = document.getElementById('upload_target');
            form.action = 'https://' + window.location.host + '/rs/cases/' + caseNumber + '/attachments';

            var redirectToCase = function (caseNumber) {
                $state.go('edit', { id: caseNumber });
                AlertService.clearAlerts();
                CaseService.submittingCase = false;
            };

            var eventHandler = function () {
                if (iframeId.detachEvent){
                    iframeId.detachEvent('onload', eventHandler);
                }
                if (iframeId.removeEventListener){
                    iframeId.removeEventListener('load', eventHandler, false);
                }
                if(!$scope.ie8){
                    var content;
                    if (iframeId.contentDocument && iframeId.contentDocument.body !== null) {
                        content = iframeId.contentDocument.body.innerText;
                    } else if (iframeId.contentWindow && iframeId.contentWindow.document.body !== null) {
                        content = iframeId.contentWindow.document.body.innerText;
                    }
                    if (content !== undefined && content.length) {
                        var parser = document.createElement('a');
                        parser.href = content;
                        var splitPath = parser.pathname.split('/');
                        if(splitPath !== undefined && splitPath[4] !== undefined){
                            redirectToCase(caseNumber);
                            $scope.$apply();
                        } else {
                            AlertService.addDangerMessage(gettextCatalog.getString('Error: Failed to upload attachment. Message: {{errorMessage}}',{errorMessage:content}));
                            redirectToCase(caseNumber);
                            $scope.$apply();
                        }
                    } else {
                        AlertService.addDangerMessage(gettextCatalog.getString('Error: Failed to upload attachment. Message: {{errorMessage}}',{errorMessage:content}));
                        redirectToCase(caseNumber);
                        $scope.$apply();
                    }
                }else {
                    redirectToCase(caseNumber);
                    $scope.$apply();
                }
                AlertService.removeAlert(uploadingAlert);
            };

            if (iframeId.addEventListener){
                iframeId.addEventListener('load', eventHandler, true);
            } else if (iframeId.attachEvent){
                iframeId.attachEvent('onload', eventHandler);
            }
            var uploadingAlert = AlertService.addWarningMessage(gettextCatalog.getString('Uploading attachment...'));
            form.submit();
        };

        $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
            CaseService.clearCase();
        });

        $scope.makeRecommendationPanelVisible =function(){
            $scope.showRecommendationPanel = true;
        };

        $scope.updateDescriptionString = function(){
            var des = '';
            if(RHAUtils.isNotEmpty(CaseService.kase.problem) && CaseService.kase.problem.length > 0){
                CaseService.kase.description = CaseService.problemString + '\n\n' + CaseService.kase.problem;
            }
            if(RHAUtils.isNotEmpty(CaseService.kase.environment) && CaseService.kase.environment.length > 0){
                if(RHAUtils.isNotEmpty(CaseService.kase.description)){
                    CaseService.kase.description = CaseService.kase.description.concat('\n\n');
                }
                CaseService.kase.description = CaseService.kase.description.concat(CaseService.environmentString + '\n\n' + CaseService.kase.environment);
            }
            if(RHAUtils.isNotEmpty(CaseService.kase.occurance) && CaseService.kase.occurance.length > 0){
                if(RHAUtils.isNotEmpty(CaseService.kase.description)){
                    CaseService.kase.description = CaseService.kase.description.concat('\n\n');
                }
                CaseService.kase.description = CaseService.kase.description.concat(CaseService.occuranceString + '\n\n' + CaseService.kase.occurance);
            }
            if(RHAUtils.isNotEmpty(CaseService.kase.urgency) && CaseService.kase.urgency.length > 0){
                if(RHAUtils.isNotEmpty(CaseService.kase.description)){
                    CaseService.kase.description = CaseService.kase.description.concat('\n\n');
                }
                CaseService.kase.description = CaseService.kase.description.concat(CaseService.urgencyString + '\n\n' + CaseService.kase.urgency);
            }
            if(RHAUtils.isNotEmpty(des)){
                CaseService.kase.description = des;
            }
        };
    }
]);

'use strict';
/*jshint camelcase: false, expr: true*/
angular.module('RedhatAccess.cases').controller('NewCaseRecommendationsController', [
    '$scope',
    '$location',
    'SearchResultsService',
    'SEARCH_CONFIG',
    'securityService',
    'AlertService',
    'RecommendationsService',
    function ($scope, $location, SearchResultsService, SEARCH_CONFIG, securityService, AlertService, RecommendationsService) {
        $scope.SearchResultsService = SearchResultsService;
        $scope.selectedSolution = SearchResultsService.currentSelection;
        $scope.currentSearchData = SearchResultsService.currentSearchData;
        $scope.itemsPerPage = 3;
        $scope.currentPage = 1;
        $scope.lastPage = 1;
        $scope.RecommendationsService = RecommendationsService;
        $scope.selectPage = function (pageNum) {

            var start = $scope.itemsPerPage * (pageNum - 1);
            var end = start + $scope.itemsPerPage;
            end = end > RecommendationsService.recommendations.length ? RecommendationsService.recommendations.length : end;
            $scope.results = RecommendationsService.recommendations.slice(start, end);
            $scope.currentPage = pageNum;
        };
        $scope.triggerAnalytics = function ($event) {
            if (window.chrometwo_require !== undefined && $location.path() === '/case/new') {
                chrometwo_require(['analytics/main'], function (analytics) {
                    analytics.trigger('OpenSupportCaseRecommendationClick', $event);
                    analytics.trigger("ABTestSuccess", $event);
                });
            }
        };
        $scope.findLastPage = function () {
            $scope.lastPage = Math.ceil(RecommendationsService.recommendations.length / $scope.itemsPerPage);
        };
        $scope.$watch(function () {
            return SearchResultsService.currentSelection;
        }, function (newVal) {
            $scope.selectedSolution = newVal;
        });

        $scope.$watch(function () {
            return RecommendationsService.recommendations;
        }, function () {
            $scope.currentPage = 1;
            $scope.selectPage($scope.currentPage);
            $scope.findLastPage();
        }, true);
    }
]);

/*global angular*/
'use strict';
angular.module('RedhatAccess.cases').controller('OwnerSelect', [
    '$scope',
    'securityService',
    'SearchCaseService',
    'CaseService',
    function ($scope, securityService, SearchCaseService, CaseService) {
        $scope.securityService = securityService;
        $scope.SearchCaseService = SearchCaseService;
        $scope.CaseService = CaseService;
    }
]);

'use strict';
/*global $ */
angular.module('RedhatAccess.cases').controller('ProceedWithoutAttachModal', [
    '$scope',
    '$modalInstance',
    '$sce',
    'AttachmentsService',
    'RHAUtils',
    function ($scope, $modalInstance, $sce, AttachmentsService, RHAUtils) {
        $scope.AttachmentsService = AttachmentsService;
        $scope.closeModal = function (proceed) {
            AttachmentsService.proceedWithoutAttachments = proceed;
            $modalInstance.close();
        };
        $scope.parseArtifactHtml = function () {
            var parsedHtml = '';
            if (RHAUtils.isNotEmpty(AttachmentsService.suggestedArtifact.description)) {
                var rawHtml = AttachmentsService.suggestedArtifact.description.toString();
                parsedHtml = $sce.trustAsHtml(rawHtml);
            }
            return parsedHtml;
        };
    }
]);


'use strict';
angular.module('RedhatAccess.cases').controller('ProductSelect', [
    '$scope',
    'securityService',
    'SearchCaseService',
    'CaseService',
    'ProductsService',
    'strataService',
    'AlertService',
    'RHAUtils',
    'RecommendationsService',
    function ($scope, securityService, SearchCaseService, CaseService, ProductsService, strataService, AlertService, RHAUtils, RecommendationsService) {
        $scope.securityService = securityService;
        $scope.SearchCaseService = SearchCaseService;
        $scope.CaseService = CaseService;
        $scope.ProductsService = ProductsService;
        $scope.RecommendationsService = RecommendationsService;
        $scope.products = [];
        $scope.$watch(function () {
            return ProductsService.products;
        }, function () {
            if(RHAUtils.isNotEmpty(ProductsService.products)){
                $scope.products = ProductsService.products;
                if(RHAUtils.isNotEmpty(CaseService.kase.product)){
                    var selectedProduct = {
                        code : CaseService.kase.product,
                        name : CaseService.kase.product
                    }
                    var prodInArray = false;
                    for (var i = 0; i < $scope.products.length; i++) {
                        if ($scope.products[i].code === selectedProduct.code && $scope.products[i].name === selectedProduct.name) {
                            prodInArray = true;
                        }
                    }
                    if(!prodInArray){
                        $scope.products.push(selectedProduct);
                    }
                }
            }
        });
    }
]);
'use strict';
/*global $ */
angular.module('RedhatAccess.cases').controller('RequestEscalation', [
    '$scope',
    '$modal',
    function ($scope, $modal) {
		$scope.requestManagementEscalation = function () {
	        $modal.open({
	            templateUrl: 'cases/views/requestManagementEscalationModal.html',
	            controller: 'RequestManagementEscalationModal'
	        });
	    };
    }
]);

'use strict';
/*global $ */
/*jshint camelcase: false*/
angular.module('RedhatAccess.cases').controller('RequestManagementEscalationModal', [
    '$scope',
    '$modalInstance',
    'AlertService',
    'CaseService',
    'DiscussionService',
    'strataService',
    'securityService',
    '$q',
    '$stateParams',
    'RHAUtils',
    function ($scope, $modalInstance, AlertService, CaseService, DiscussionService, strataService,securityService, $q, $stateParams, RHAUtils) {
        $scope.CaseService = CaseService;
        $scope.submittingRequest = false;
        if(RHAUtils.isNotEmpty(CaseService.commentText)){
            $scope.disableSubmitRequest = false;
            CaseService.escalationCommentText = CaseService.commentText;
        }else{
            $scope.disableSubmitRequest = true;
        }
        $scope.submitRequestClick = angular.bind($scope, function (commentText) {
            $scope.submittingRequest = true;
            var fullComment = 'Request Management Escalation: ' + commentText;
            var onSuccess  = function (response) {
                var caseJSON = { 'escalated': true };
                var updateCase = strataService.cases.put(CaseService.kase.case_number, caseJSON);
                updateCase.then(function (response) {
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                });

                CaseService.populateComments($stateParams.id).then(function (comments) {
                    $scope.closeModal();
                    if(CaseService.localStorageCache)
                    {
                        CaseService.localStorageCache.remove(CaseService.kase.case_number+securityService.loginStatus.authedUser.sso_username);
                    }
                    $scope.submittingRequest = false;
                    CaseService.draftSaved = false;
                    CaseService.draftComment = undefined;
                    CaseService.commentText = undefined;
                    DiscussionService.commentTextBoxEnlargen=false;
                }, function (error) {
                    AlertService.addStrataErrorMessage(error);
                });
            };
            var onError = function (error) {
                AlertService.addStrataErrorMessage(error);
            };

            if(CaseService.localStorageCache) {
                if(CaseService.draftCommentOnServerExists)
                {
                    strataService.cases.comments.put(CaseService.kase.case_number,  fullComment, false, true, CaseService.draftComment.id).then(onSuccess, onError);
                }
                else {
                    strataService.cases.comments.post(CaseService.kase.case_number,  fullComment, true, false).then(onSuccess, onError);
                }
            }
            else {
                if (RHAUtils.isNotEmpty(CaseService.draftComment)) {
                    strataService.cases.comments.put(CaseService.kase.case_number,  fullComment, false, true, CaseService.draftComment.id).then(onSuccess, onError);
                } else {
                    strataService.cases.comments.post(CaseService.kase.case_number,  fullComment, true, false).then(onSuccess, onError);
                }
            }


        });
        $scope.closeModal = function () {
            CaseService.escalationCommentText = undefined;
            $modalInstance.close();
        };
        $scope.onNewEscalationComment = function () {
            if (RHAUtils.isNotEmpty(CaseService.escalationCommentText) && !$scope.submittingRequest) {
                $scope.disableSubmitRequest = false;
            } else if (RHAUtils.isEmpty(CaseService.escalationCommentText)) {
                $scope.disableSubmitRequest = true;
            }
        };
    }
]);


'use strict';
angular.module('RedhatAccess.cases').controller('SearchBox', [
    '$scope',
    'SearchBoxService',
    'securityService',
    function ($scope, SearchBoxService, securityService) {
        $scope.securityService = securityService;
        $scope.SearchBoxService = SearchBoxService;
        $scope.onFilterKeyPress = function ($event) {
            if ($event.keyCode === 13) {
                SearchBoxService.doSearch();
            } else if (angular.isFunction(SearchBoxService.onKeyPress)) {
                SearchBoxService.onKeyPress();
            }
        };
        $scope.clearSearch = function () {
            SearchBoxService.searchTerm=undefined;
        };
    }
]);

'use strict';
angular.module('RedhatAccess.cases').controller('SeveritySelect', [
    '$scope',
    'CaseService',
    function ($scope, CaseService) {
        $scope.CaseService = CaseService;
    }
]);
'use strict';
angular.module('RedhatAccess.cases').controller('StatusSelect', [
    '$scope',
    'securityService',
    'CaseService',
    'STATUS',
    'gettextCatalog',
    function ($scope, securityService, CaseService, STATUS, gettextCatalog) {
        $scope.securityService = securityService;
        $scope.CaseService = CaseService;
        $scope.STATUS = STATUS;
        $scope.statuses = [
            {
                name: gettextCatalog.getString('Open and Closed'),
                value: STATUS.both
            },
            {
                name: gettextCatalog.getString('Open'),
                value: STATUS.open
            },
            {
                name: gettextCatalog.getString('Closed'),
                value: STATUS.closed
            }
        ];
    }
]);

'use strict';
angular.module('RedhatAccess.cases').controller('TypeSelect', [
    '$scope',
    'securityService',
    'CaseService',
    'strataService',
    'AlertService',
    function ($scope, securityService, CaseService, strataService, AlertService) {
        $scope.securityService = securityService;
        $scope.CaseService = CaseService;
        $scope.typesLoading = true;
        strataService.values.cases.types().then(function (types) {
            $scope.typesLoading = false;
            CaseService.types = types;
        }, function (error) {
            $scope.typesLoading = false;
            AlertService.addStrataErrorMessage(error);
        });
    }
]);
'use strict';
angular.module('RedhatAccess.cases').controller('VersionSelect', [
    '$scope',
    'securityService',
    'SearchCaseService',
    'CaseService',
    'ProductsService',
    'strataService',
    'AlertService',
    'RecommendationsService',
    'RHAUtils',
    'CASE_EVENTS',
    function ($scope, securityService, SearchCaseService, CaseService, ProductsService, strataService, AlertService, RecommendationsService, RHAUtils, CASE_EVENTS) {
        $scope.securityService = securityService;
        $scope.SearchCaseService = SearchCaseService;
        $scope.CaseService = CaseService;
        $scope.ProductsService = ProductsService;
        $scope.RecommendationsService = RecommendationsService;
        $scope.versions = [];
        if(RHAUtils.isNotEmpty(CaseService.kase.product)){
            $scope.versions = ProductsService.getVersions(CaseService.kase.product);
        }
        $scope.$on(CASE_EVENTS.productSelectChange, function () {
            ProductsService.getVersions(CaseService.kase.product);
        });
        $scope.$watch(function () {
            return ProductsService.versions;
        }, function () {
            if(RHAUtils.isNotEmpty(ProductsService.versions)){
                $scope.versions = ProductsService.versions;
                if(RHAUtils.isNotEmpty(CaseService.kase.version)){
                    if($scope.versions.indexOf(CaseService.kase.version) === -1){
                        $scope.versions.push(CaseService.kase.version);
                    }
                }
            }
        });
    }
]);
'use strict';
angular.module('RedhatAccess.cases').directive('rhaAccountselect', function () {
    return {
        templateUrl: 'cases/views/accountSelect.html',
        restrict: 'A',
        controller: 'AccountSelect'
    };
});
'use strict';
angular.module('RedhatAccess.cases').directive('rhaAddcommentsection', function () {
    return {
        templateUrl: 'cases/views/addCommentSection.html',
        restrict: 'A',
        controller: 'AddCommentSection'
    };
});
'use strict';
angular.module('RedhatAccess.cases').directive('rhaAttachlocalfile', function () {
    return {
        templateUrl: 'cases/views/attachLocalFile.html',
        restrict: 'A',
        controller: 'AttachLocalFile',
        scope: { disabled: '=' }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaAttachproductlogs', function () {
    return {
        templateUrl: 'cases/views/attachProductLogs.html',
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
        }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaCaseattachments', function () {
    return {
        templateUrl: 'cases/views/attachmentsSection.html',
        restrict: 'A',
        controller: 'AttachmentsSection',
        scope: { loading: '=' },
        link: function postLink(scope, element, attrs) {
        }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('chosen', function () {
    return {
        priority : 1,
        restrict: 'A',
        link : {
            pre : function(scope, element, attr, ngModel) {
                var defaultText = attr.placeholder;
                angular.element(element[0]).attr('data-placeholder', defaultText);
            }
        }
    }
});

'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaCreategroupbutton', function () {
    return {
        templateUrl: 'cases/views/createGroupButton.html',
        restrict: 'A',
        controller: 'CreateGroupButton'
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaDeletegroupbutton', function () {
    return {
        templateUrl: 'cases/views/deleteGroupButton.html',
        restrict: 'A',
        controller: 'DeleteGroupButton'
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaCasedescription', function () {
    return {
        templateUrl: 'cases/views/descriptionSection.html',
        restrict: 'A',
        scope: { loading: '=' },
        controller: 'DescriptionSection',
        link: function postLink(scope, element, attrs) {
        }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaCasedetails', function () {
    return {
        templateUrl: 'cases/views/detailsSection.html',
        controller: 'DetailsSection',
        scope: {
            compact: '=',
            loading: '='
        },
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            scope.$on('$destroy', function () {
                element.remove();
            });
        }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaCasediscussion', ['$location','$anchorScroll' ,function ($location, $anchorScroll) {
    return {
        templateUrl: 'cases/views/discussionSection.html',
        controller: 'DiscussionSection',
        scope: { loading: '=' },
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            scope.$on('$destroy', function () {
                element.remove();
            });
        }
    };
}]);

'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaEditcaserecommendations', function () {
    return {
        templateUrl: 'cases/views/editCaseRecommendationsSection.html',
        restrict: 'A',
        controller: 'EditCaseRecommendationsController',
        transclude: true,
        scope: { loading: '=' },
        link: function postLink(scope, element, attrs) {
            scope.$on('$destroy', function () {
                element.remove();
            });
        }
    };
});

/*global angular*/
'use strict';
angular.module('RedhatAccess.cases').directive('rhaEmailnotifyselect', function () {
    return {
        templateUrl: 'cases/views/emailNotifySelect.html',
        restrict: 'A',
        transclude: true,
        controller: 'EmailNotifySelect',
        link: function postLink(scope, element, attrs) {
            scope.$on('$destroy', function () {
                element.remove();
            });
        }
    };
});

'use strict';
angular.module('RedhatAccess.cases').directive('rhaEntitlementselect', function () {
    return {
        templateUrl: 'cases/views/entitlementSelect.html',
        restrict: 'A',
        controller: 'EntitlementSelect'
    };
});
'use strict';
angular.module('RedhatAccess.cases').directive('rhaExportcsvbutton', function () {
    return {
        templateUrl: 'cases/views/exportCSVButton.html',
        restrict: 'A',
        controller: 'ExportCSVButton'
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaFilterselect', function () {
    return {
        templateUrl: 'cases/views/filterSelect.html',
        restrict: 'A',
        controller: 'FilterSelect',
        scope: {
            onchange: '&'
        }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaGrouplist', function () {
    return {
        templateUrl: 'cases/views/groupList.html',
        restrict: 'A',
        controller: 'GroupList',
        link: function postLink(scope, element, attrs) {
	        scope.$on('$destroy', function () {
	            element.remove();
	        });
	    }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaGroupselect', function () {
    return {
        templateUrl: 'cases/views/groupSelect.html',
        restrict: 'A',
        controller: 'GroupSelect',
        scope: {
            onchange: '&'
        }
    };
});
'use strict';
angular.module('RedhatAccess.cases').directive('rhaListattachments', function () {
    return {
        templateUrl: 'cases/views/listAttachments.html',
        restrict: 'A',
        controller: 'ListAttachments',
        scope: { disabled: '=' }
    };
});
'use strict';
angular.module('RedhatAccess.cases').directive('rhaListbugzillas', function () {
    return {
        templateUrl: 'cases/views/listBugzillas.html',
        restrict: 'A',
        controller: 'ListBugzillas',
        scope: { loading: '=' },
        link: function postLink(scope, element, attrs) {
        }
    };
});
/*global angular*/
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaListfilter', function () {
    return {
        templateUrl: 'cases/views/listFilter.html',
        restrict: 'A',
        controller: 'ListFilter',
        scope: {
            prefilter: '=',
            postfilter: '='
        },
        link: function postLink(scope, element, attrs) {
            scope.$on('$destroy', function () {
                element.remove();
            });
        }
    };
});
'use strict';
angular.module('RedhatAccess.cases').directive('rhaListnewattachments', function () {
    return {
        templateUrl: 'cases/views/listNewAttachments.html',
        restrict: 'A',
        controller: 'ListNewAttachments'
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaNewcaserecommendations', function () {

	return {
        templateUrl: 'cases/views/newCaseRecommendationsSection.html',
        restrict: 'A',
        controller: 'NewCaseRecommendationsController',
        link: function postLink(scope, element, attrs) {
            scope.$on('$destroy', function () {
                element.remove();
            });
        }
    };
});

'use strict';
/*global angular*/
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaOwnerselect', function () {
    return {
        templateUrl: 'cases/views/ownerSelect.html',
        restrict: 'A',
        controller: 'OwnerSelect',
        scope: { onchange: '&' },
        link: function postLink(scope, element, attrs) {
            scope.$on('$destroy', function () {
                element.remove();
            });
        }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaProductselect', function () {
    return {
        templateUrl: 'cases/views/productSelect.html',
        restrict: 'A',
        controller: 'ProductSelect',
        scope: { onchange: '&' }
    };
});
'use strict';
angular.module('RedhatAccess.cases').directive('rhaRequestescalation', function () {
    return {
        templateUrl: 'cases/views/requestEscalation.html',
        restrict: 'A',
        controller: 'RequestEscalation'
    };
});

'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('scrollHide', ["$document", "$timeout", function ($document, $timeout) {
	return {
		restrict: 'A',
		scope: {
			scrollHide: '@',
			scrollHideClass: '@',
			scrollHidePad: '@'
		},
		link: function(scope, element, attrs) {
			var elemId = ('#' + scope.scrollHide);
			var $compare = angular.element(elemId);
			var className = scope.scrollHideClass || '';
			var padding = +scope.scrollHidePad || 0;

			function shouldToggle() {
				return (element.offset().top >= $compare.offset().top + padding);
			}

			function toggle() {
				if (!$compare[0]) {
					$compare = angular.element(elemId);
					return;
				}
				if (shouldToggle()) {
					element.addClass(className);
				} else {
					element.removeClass(className);
				}
			}

			$document.on('scroll', toggle);
			$(window).on('resize', toggle);
			$timeout(toggle, 0);

			scope.$on('$destroy', function() {
				$document.off('scroll', toggle);
				$(window).off('resize', toggle);
			});
		}
	};
}]);
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaSearchbox', function () {
    return {
        templateUrl: 'cases/views/searchBox.html',
        restrict: 'A',
        controller: 'SearchBox',
        scope: { 
        	placeholder: '=',
        	hidebutton: '=?'
        }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaSelectloadingindicator', function () {
    return {
        templateUrl: 'cases/views/selectLoadingIndicator.html',
        restrict: 'A',
        transclude: true,
        scope: {
            loading: '=',
            type: '@'
        }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaSeverityselect', function () {
    return {
        templateUrl: 'cases/views/severitySelect.html',
        restrict: 'A',
        controller: 'SeveritySelect'
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaStatusselect', function () {
    return {
        templateUrl: 'cases/views/statusSelect.html',
        restrict: 'A',
        controller: 'StatusSelect',
        scope: { onchange: '&' }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaTypeselect', function () {
    return {
        templateUrl: 'cases/views/typeSelect.html',
        restrict: 'A',
        controller: 'TypeSelect',
        scope: { onchange: '&' }
    };
});
'use strict';
/*jshint unused:vars */
angular.module('RedhatAccess.cases').directive('rhaVersionselect', function () {
    return {
        templateUrl: 'cases/views/versionSelect.html',
        restrict: 'A',
        controller: 'VersionSelect'
    };
});
'use strict';
angular.module('RedhatAccess.cases').filter('bytes', function () {
    return function (bytes, precision) {
        if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
            return '-';
        }
        if (typeof precision === 'undefined') {
            precision = 1;
        }
        var units = [
                'bytes',
                'kB',
                'MB',
                'GB',
                'TB',
                'PB'
            ], number = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
    };
});
'use strict';
angular.module('RedhatAccess.cases').filter('substring', function () {
    return function (text, length) {
        var shortText = '';
        if(length === undefined){
            length = 150;
        }
        if (text !== undefined && text.length > length) {
            shortText = text.substr(0, length);
            // var lastSpace = shortText.lastIndexOf(' ');
            // shortText = shortText.substr(0, lastSpace);
            shortText = shortText.concat('...');
        } else {
            shortText = text;
        }
        return shortText;
    };
});
'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').service('AttachmentsService', [
    '$filter',
    '$q',
    '$sce',
    '$state',
    '$window',
    '$location',
    'RHAUtils',
    'strataService',
    'TreeViewSelectorUtils',
    '$http',
    'securityService',
    'AlertService',
    'CaseService',
    'gettextCatalog',
    function ($filter, $q, $sce, $state, $window, $location, RHAUtils, strataService, TreeViewSelectorUtils, $http, securityService, AlertService, CaseService, gettextCatalog) {
        this.originalAttachments = [];
        this.updatedAttachments = [];
        this.backendAttachments = [];
        this.suggestedArtifact = {};
        this.proceedWithoutAttachments = false;
        this.maxAttachmentSize;
        this.clear = function () {
            this.originalAttachments = [];
            this.updatedAttachments = [];
            this.backendAttachments = [];
            this.suggestedArtifact = {};
        };
        this.updateBackEndAttachments = function (selected) {
            this.backendAttachments = selected;
        };
        this.hasBackEndSelections = function () {
            return TreeViewSelectorUtils.hasSelections(this.backendAttachments);
        };
        this.removeUpdatedAttachment = function ($index) {
            this.updatedAttachments.splice($index, 1);
        };
        this.removeOriginalAttachment = function (attachment) {
            var progressMessage = AlertService.addWarningMessage(gettextCatalog.getString('Deleting attachment: {{attachmentName}}',{attachmentName:attachment.file_name}));
            strataService.cases.attachments.remove(attachment.uuid, CaseService.kase.case_number).then(angular.bind(this, function () {
                AlertService.removeAlert(progressMessage);
                AlertService.addSuccessMessage(gettextCatalog.getString('Successfully deleted attachment:{{attachmentName}}',{attachmentName:attachment.file_name}));
                var i = 0;
                for(i; i < this.originalAttachments.length; i++){
                    if(this.originalAttachments[i].uuid === attachment.uuid){
                        break;
                    }
                }
                this.originalAttachments.splice(i, 1);
            }), function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };
        this.addNewAttachment = function (attachment) {
            this.updatedAttachments.push(attachment);
        };
        this.defineOriginalAttachments = function (attachments) {
            if (!angular.isArray(attachments)) {
                this.originalAttachments = [];
            } else {
                this.originalAttachments = attachments;
            }
        };
        this.postBackEndAttachments = function (caseId) {
            var selectedFiles = TreeViewSelectorUtils.getSelectedLeaves(this.backendAttachments);
            return securityService.getBasicAuthToken().then(function (auth) {
                /*jshint unused:false */
                //we post each attachment separately
                var promises = [];
                angular.forEach(selectedFiles, function (file) {
                    var jsonData = {
                            authToken: auth,
                            attachment: file,
                            caseNum: caseId
                        };
                    var deferred = $q.defer();
                    $http.post('attachments', jsonData).success(function (data, status, headers, config) {
                        deferred.resolve(data);
                        AlertService.clearAlerts();
                        AlertService.addSuccessMessage(gettextCatalog.getString('Successfully uploaded attachment {{attachmentName}} to case {{caseNumber}}',{attachmentName:jsonData.attachment,caseNumber:caseId}));
                    }).error(function (data, status, headers, config) {
                        var errorMsg = '';
                        switch (status) {
                        case 401:
                            errorMsg = ' : Unauthorised.';
                            break;
                        case 409:
                            errorMsg = ' : Invalid username/password.';
                            break;
                        case 500:
                            errorMsg = ' : Internal server error';
                            break;
                        }
                        AlertService.addDangerMessage(gettextCatalog.getString('Failed to upload attachment {{attachmentName}} to case {{caseNumber}}: {{errorMessage}}',{attachmentName:jsonData.attachment,caseNumber:caseId,errorMessage:errorMsg}));
                        deferred.reject(data);
                    });
                    promises.push(deferred.promise);
                });
                return $q.all(promises);
            });
        };
        this.updateAttachments = function (caseId) {
            var hasServerAttachments = this.hasBackEndSelections();
            var hasLocalAttachments = !angular.equals(this.updatedAttachments.length, 0);
            if (hasLocalAttachments || hasServerAttachments) {
                var promises = [];
                var updatedAttachments = this.updatedAttachments;
                if (hasServerAttachments) {
                    promises.push(this.postBackEndAttachments(caseId));
                }
                if (hasLocalAttachments) {
                    //find new attachments
                    angular.forEach(updatedAttachments, function (attachment) {
                        if (!attachment.hasOwnProperty('uuid')) {
                            var formdata = new FormData();
                            formdata.append('file', attachment.fileObj);
                            formdata.append('description', attachment.description);

                            var promise = strataService.cases.attachments.post(formdata, caseId);
                            promise.then(function (uri) {
                                attachment.uri = uri;
                                attachment.uuid = uri.slice(uri.lastIndexOf('/') + 1);
                                var currentDate =new Date();
                                var lastModifiedDate = RHAUtils.convertToTimezone(currentDate);
                                attachment.sortModifiedDate=currentDate;
                                attachment.last_modified_date = RHAUtils.formatDate(lastModifiedDate, 'MMM DD YYYY');
                                attachment.last_modified_time = RHAUtils.formatDate(lastModifiedDate, 'hh:mm A Z');
                                AlertService.clearAlerts();
                                AlertService.addSuccessMessage(gettextCatalog.getString('Successfully uploaded attachment {{attachmentFileName}} to case {{caseNumber}}',{attachmentFileName:attachment.file_name,caseNumber:caseId}));
                            }, function (error) {
                                if (navigator.appVersion.indexOf("MSIE 10") !== -1){
                                    if($location.path() === '/case/new'){
                                        $state.go('edit', { id: caseId });
                                        AlertService.clearAlerts();
                                        CaseService.submittingCase = false;
                                    } else{
                                        $window.location.reload();
                                    }
                                } else{
                                    AlertService.addStrataErrorMessage(error);
                                }
                            });
                            promises.push(promise);
                        }
                    });
                }
                var uploadingAlert = AlertService.addWarningMessage(gettextCatalog.getString('Uploading attachments...'));
                var parentPromise = $q.all(promises);
                parentPromise.then(angular.bind(this, function () {
                    this.originalAttachments = this.originalAttachments.concat(this.updatedAttachments);
                    this.updatedAttachments = [];
                    AlertService.removeAlert(uploadingAlert);
                }), function (error) {
                    AlertService.addStrataErrorMessage(error);
                    AlertService.removeAlert(uploadingAlert);
                });
                return parentPromise;
            }
        };
        this.parseArtifactHtml = function () {
            var parsedHtml = '';
            if (RHAUtils.isNotEmpty(this.suggestedArtifact.description)) {
                var rawHtml = this.suggestedArtifact.description.toString();
                parsedHtml = $sce.trustAsHtml(rawHtml);
            }
            return parsedHtml;
        };
        this.fetchMaxAttachmentSize = function () {
            strataService.values.cases.attachment.size().then(angular.bind(this, function (response) {
                if (RHAUtils.isNotEmpty(response)) {
                    this.maxAttachmentSize = response.match(/\d+/)[0];
                }
            }), function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };
    }
]);

'use strict';
angular.module('RedhatAccess.cases').service('CaseListService', [function () {
        this.cases = [];
        this.defineCases = function (cases) {
            this.cases = cases;
        };
    }]);
'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').constant('CASE_GROUPS', {
    manage: 'manage',
    ungrouped: 'ungrouped',
    none: 'none'
}).service('CaseService', [
    'strataService',
    'AlertService',
    'RHAUtils',
    'securityService',
    '$q',
    '$timeout',
    '$filter',
    'gettextCatalog',
    '$angularCacheFactory',
    '$rootScope',
    'CASE_EVENTS',
    'ConstantsService',
    function (strataService, AlertService, RHAUtils, securityService, $q, $timeout, $filter, gettextCatalog, $angularCacheFactory, $rootScope, CASE_EVENTS, ConstantsService) {
        $angularCacheFactory('localStorageCache', {
            storageMode: 'localStorage',
            verifyIntegrity: true
        });
        this.updatingCase = false;
        this.submittingCase = false;
        this.kase = {};
        this.prestineKase = {};
        this.caseDataReady = false;
        this.isCommentPublic = true;
        this.versions = [];
        this.products = [];
        this.severities = [];
        this.groups = [];
        this.users = [];
        this.comments = [];
        this.originalNotifiedUsers = [];
        this.updatedNotifiedUsers = [];
        this.account = {};
        this.draftComment = {};
        this.draftCommentOnServerExists=false;
        this.commentText = '';
        this.escalationCommentText = '';
        this.status = '';
        this.severity = '';
        this.type = '';
        this.group = '';
        this.owner = '';
        this.product = '';
        this.bugzillaList = {};
        this.entitlement = '';
        this.updatingNewCaseSummary = false;
        this.updatingNewCaseDescription = false;
        // Added common modal variables for Status/Severity/CaseClose confirmation
        this.confirmationModal = '';
        this.confirmationModalHeader = '';
        this.confirmationModalMessage = '';
        this.confirmationModalProperty = '';
        this.onFilterSelectChanged = function(){
            if(this.localStorageCache) {
                this.localStorageCache.put('filterSelect'+securityService.loginStatus.authedUser.sso_username,this.filterSelect);
            }
            $rootScope.$broadcast(CASE_EVENTS.searchSubmit);
        };
        this.onSelectChanged = function(){
            $rootScope.$broadcast(CASE_EVENTS.searchSubmit);
        };
        this.onOwnerSelectChanged = function(){
            $rootScope.$broadcast(CASE_EVENTS.ownerChange);
        };
        this.onGroupSelectChanged = function(){
            $rootScope.$broadcast(CASE_EVENTS.searchSubmit);
        };
        this.onProductSelectChange = function(){
            $rootScope.$broadcast(CASE_EVENTS.productSelectChange);
        };
        this.groupOptions = [];
        this.showsearchoptions = false;
        this.disableAddComment = true;
        this.fts = false;
        this.fts_contact = '';
        this.draftSaved = false;
        this.sortBy='lastModifiedDate';
        this.sortOrder='desc';
        this.filterSelect = '';
        this.problemString = 'What problem/issue/behavior are you having trouble with?  What do you expect to see?';
        this.environmentString = 'Where are you experiencing the behavior?  What environment?';
        this.occuranceString = 'When does the behavior occur? Frequently?  Repeatedly?   At certain times?';
        this.urgencyString = 'What information can you provide around timeframes and urgency?';
        this.localStorageCache = $angularCacheFactory.get('localStorageCache');
        /**
         * Add the necessary wrapper objects needed to properly display the data.
         *
         * @param rawCase
         */
        this.defineCase = function (rawCase) {
            /*jshint camelcase: false */
            rawCase.severity = { 'name': rawCase.severity };
            rawCase.status = { 'name': rawCase.status };
            rawCase.group = { 'number': rawCase.folder_number };
            rawCase.type = { 'name': rawCase.type };
            this.kase = rawCase;
            this.ungroupedCaseModifier();
            angular.copy(this.kase, this.prestineKase);
            this.bugzillaList = rawCase.bugzillas;
            this.caseDataReady = true;
            this.onProductSelectChange();
        };
        this.resetCase = function(){
            angular.copy(this.prestineKase, this.kase);
        };
        this.setCase = function (jsonCase) {
            this.kase = jsonCase;
            this.ungroupedCaseModifier();
            angular.copy(this.kase, this.prestineKase);
            this.bugzillaList = jsonCase.bugzillas;
            this.caseDataReady = true;
        };

        //Explicitly assigning group_number = '-1' for ungrouped case when case payload has no group information
        this.ungroupedCaseModifier = function() {
            if(RHAUtils.isEmpty(this.kase.group.number)) {
                this.kase.group = {"number":"-1","name":"Ungrouped Case","is_private":false,"is_default":false};
            }
        };

        this.defineAccount = function (account) {
            this.account = account;
        };
        this.defineNotifiedUsers = function () {
            /*jshint camelcase: false */
            this.updatedNotifiedUsers.push(this.kase.contact_sso_username);
            //hide the X button for the case owner
            $('#rha-emailnotifyselect').on('change', angular.bind(this, function () {
                $('rha-emailnotifyselect .chosen-choices li:contains("' + this.kase.contact_sso_username + '") a').css('display', 'none');
                $('rha-emailnotifyselect .chosen-choices li:contains("' + this.kase.contact_sso_username + '")').css('padding-left', '5px');
            }));
            if (RHAUtils.isNotEmpty(this.kase.notified_users)) {
                angular.forEach(this.kase.notified_users.link, angular.bind(this, function (user) {
                    this.originalNotifiedUsers.push(user.sso_username);
                }));
                this.updatedNotifiedUsers = this.updatedNotifiedUsers.concat(this.originalNotifiedUsers);
            }
        };
        this.getGroups = function () {
            return this.groups;
        };
        this.clearCase = function () {
            this.caseDataReady = false;
            this.isCommentPublic = true;
            this.updatingCase = false;
            this.kase = {};
            this.prestineKase = {};
            this.versions = [];
            this.products = [];
            this.statuses = [];
            this.severities = [];
            this.groups = [];
            this.account = {};
            this.comments = [];
            this.bugzillaList = {};
            this.draftComment = undefined;
            this.draftCommentLocalStorage = undefined;
            this.commentText = undefined;
            this.escalationCommentText = undefined;
            this.status = undefined;
            this.severity = undefined;
            this.type = undefined;
            this.group = '';
            this.owner = undefined;
            this.product = undefined;
            this.originalNotifiedUsers = [];
            this.updatedNotifiedUsers = [];
            this.groupOptions = [];
            this.fts = false;
            this.fts_contact = '';
            this.entitlement = '';
            this.updatingNewCaseSummary = false;
            this.updatingNewCaseDescription = false;
        };
        this.groupsLoading = false;
        this.populateGroups = function (ssoUsername, flushCache) {
            var that = this;
            var deferred = $q.defer();
            this.groupsLoading = true;
            var username = ssoUsername;
            if(username === undefined){
                username = securityService.loginStatus.authedUser.sso_username;
            }
            strataService.groups.list(username, flushCache).then(angular.bind(this, function (groups) {
                that.groups = groups;
                if (that.groups.length > 0) {
                    that.group = '';
                }
                that.buildGroupOptions(that);
                that.groupsLoading = false;
                deferred.resolve(groups);
            }), angular.bind(this, function (error) {
                that.groupsLoading = false;
                AlertService.addStrataErrorMessage(error);
                deferred.reject();
            }));
            return deferred.promise;
        };
        this.usersLoading = false;
        /**
         *  Intended to be called only after user is logged in and has account details
         *  See securityService.
         */
        this.populateUsers = angular.bind(this, function () {
            var promise = null;
            if (securityService.loginStatus.authedUser.org_admin) {
                this.usersLoading = true;
                var accountNumber;
                if(this.kase.account_number) {
                    accountNumber = this.kase.account_number;
                }
                else {
                    accountNumber = RHAUtils.isEmpty(this.account.number) ? securityService.loginStatus.authedUser.account_number : this.account.number;
                }
                if(!RHAUtils.isEmpty(accountNumber)){
                    promise = strataService.accounts.users(accountNumber);
                    this.owner = undefined;
                    promise.then(angular.bind(this, function (users) {
                        angular.forEach(users, function(user){
                            if(user.sso_username === securityService.loginStatus.authedUser.sso_username) {
                                this.owner = user.sso_username;
                            }
                        }, this);
                        this.usersLoading = false;
                        this.users = users;

                    }), angular.bind(this, function (error) {
                        this.users = [];
                        this.usersLoading = false;
                        AlertService.addStrataErrorMessage(error);
                    }));
                } else{
                    var deferred = $q.defer();
                    promise = deferred.promise;
                    deferred.resolve();
                }
            } else {
                deferred = $q.defer();
                promise = deferred.promise;
                deferred.resolve();
                var tmp= {'sso_username': securityService.loginStatus.authedUser.sso_username};
                this.users.push(tmp);
            }
            return promise;
        });

        this.scrollToComment = function(commentID) {
            if(!commentID) {
                return;
            }
            var commentElem = document.getElementById(commentID);
            if(commentElem) {
                commentElem.scrollIntoView(true);
            }
        };
        this.populateComments = function (caseNumber) {
            var promise = strataService.cases.comments.get(caseNumber);
            var draftId;
            promise.then(angular.bind(this, function (comments) {
                angular.forEach(comments, angular.bind(this, function (comment, index) {
                    if (comment.draft === true) {
                        this.draftComment = comment;
                        this.draftCommentOnServerExists=true;
                        draftId=this.draftComment.id;
                        this.commentText = comment.text;
                        this.isCommentPublic = comment.public;
                        if (RHAUtils.isNotEmpty(this.commentText)) {
                            this.disableAddComment = false;
                        } else if (RHAUtils.isEmpty(this.commentText)) {
                            this.disableAddComment = true;
                        }
                        comments.slice(index, index + 1);
                    }
                }));
                if(this.localStorageCache) {
                    if (this.localStorageCache.get(caseNumber+securityService.loginStatus.authedUser.sso_username))
                    {
                        this.draftComment = this.localStorageCache.get(caseNumber+securityService.loginStatus.authedUser.sso_username);
                        this.commentText = this.draftComment.text;
                        this.isCommentPublic = this.draftComment.public;
                        if(this.draftCommentOnServerExists)
                        {
                            this.draftComment.id=draftId;
                        }
                        if (RHAUtils.isNotEmpty(this.commentText)) {
                            this.disableAddComment = false;
                        } else if (RHAUtils.isEmpty(this.commentText)) {
                            this.disableAddComment = true;
                        }
                    }
                }
                this.comments = comments;
            }), function (error) {
            });
            return promise;
        };
        this.entitlementsLoading = false;
        this.populateEntitlements = function (ssoUserName) {
            this.entitlementsLoading = true;
            strataService.entitlements.get(false, ssoUserName).then(angular.bind(this, function (entitlementsResponse) {
                // if the user has any premium or standard level entitlement, then allow them
                // to select it, regardless of the product.
                // TODO: strata should respond with a filtered list given a product.
                //       Adding the query param ?product=$PRODUCT does not work.
                var uniqueEntitlements = function (entitlements) {
                    var uEntitlements = [];
                    entitlements.forEach(function (e) {
                        if (uEntitlements.indexOf(e.sla) < 0) {
                            uEntitlements.push(e.sla);
                        }
                    });
                    return uEntitlements;
                };
                var entitlements = uniqueEntitlements(entitlementsResponse.entitlement);
                var unknownIndex = entitlements.indexOf('UNKNOWN');
                if (unknownIndex > -1) {
                    entitlements.splice(unknownIndex, 1);
                }
                this.entitlements = entitlements;
                this.entitlementsLoading = false;
            }), angular.bind(this, function (error) {
                AlertService.addStrataErrorMessage(error);
            }));
        };


        this.onChangeFTSCheck = function () {
            if(this.showFts()) {
                this.fts = true;
                this.kase.fts=true;
            } else {
                this.fts = false;
                this.kase.fts=false;
            }
        };


        this.showFts = function () {
            var showFtsCheckbox = false;
            if (RHAUtils.isNotEmpty(this.severities)) {
                if (this.entitlements !== undefined && this.entitlements.length === 1) {
                    if (this.entitlements[0] === 'PREMIUM' || this.entitlements[0] === 'AMC') {
                        showFtsCheckbox = true;
                    }
                } else if (this.entitlement === 'PREMIUM' || this.entitlement === 'AMC') {
                    showFtsCheckbox = true;
                } else if (RHAUtils.isNotEmpty(this.kase.entitlement) && (this.kase.entitlement.sla === 'PREMIUM' || this.kase.entitlement.sla === 'AMC')) {
                    showFtsCheckbox = true;
                }
                if ((showFtsCheckbox === true) && (RHAUtils.isNotEmpty(this.kase.severity) && this.kase.severity.name.charAt(0) === '1')) {
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        };
        this.newCaseIncomplete = true;
        this.validateNewCase = function () {
            if (RHAUtils.isEmpty(this.kase.product) || RHAUtils.isEmpty(this.kase.version) || RHAUtils.isEmpty(this.kase.summary) || RHAUtils.isEmpty(this.kase.description)) {
                this.newCaseIncomplete = true;
            } else {
                this.newCaseIncomplete = false;
            }
        };

        this.buildGroupOptions = function() {
            this.groupOptions = [];
            var sep = '────────────────────────────────────────';
            this.groups.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });

            if (this.showsearchoptions === true) {
                this.groupOptions.push({
                    value: '',
                    label: gettextCatalog.getString('All Groups')
                }, {
                    value: 'ungrouped',
                    label: gettextCatalog.getString('Ungrouped Cases')
                });
            } else {
                this.groupOptions.push({
                    value: '',
                    label: gettextCatalog.getString('Ungrouped Case')
                });
            }
            if (this.showsearchoptions === true && this.groups.length > 0) {
                this.groupOptions.push({
                    isDisabled: true,
                    label: sep
                });
            }
            angular.forEach(this.groups, function(group){
                if(group.number !== "-1"){
                    this.groupOptions.push({
                        value: group.number,
                        label: group.name
                    });
                    if(group.is_default) {
                        this.kase.group = group.number;
                        this.group = group.number;
                    }
                }
            }, this);
            if (this.showsearchoptions === true) {
                this.groupOptions.push({
                    isDisabled: true,
                    label: sep
                }, {
                    value: 'manage',
                    label: gettextCatalog.getString('Manage Case Groups')
                });
            }
        };

        this.clearLocalStorageCacheForNewCase = function(){
            if(this.localStorageCache && RHAUtils.isNotEmpty(this.localStorageCache.get(securityService.loginStatus.authedUser.sso_username)))
            {
                this.localStorageCache.remove(securityService.loginStatus.authedUser.sso_username);
            }
        };

        this.createCase = function(){
            var self = this;
            var deferred = $q.defer();

            /*jshint camelcase: false */
            var caseJSON = {
                'product': this.kase.product,
                'version': this.kase.version,
                'summary': this.kase.summary,
                'description': this.kase.description,
                'severity': this.kase.severity.name
            };
            if (RHAUtils.isNotEmpty(this.group)) {
                caseJSON.folderNumber = this.group;
            }
            if (RHAUtils.isNotEmpty(this.entitlement)) {
                caseJSON.entitlement = {};
                caseJSON.entitlement.sla = this.entitlement;
            }
            if (RHAUtils.isNotEmpty(this.account)) {
                caseJSON.accountNumber = this.account.number;
            }
            if (this.fts) {
                caseJSON.fts = true;
                if (this.fts_contact) {
                    caseJSON.contactInfo24X7 = this.fts_contact;
                }
            }
            if (RHAUtils.isNotEmpty(this.owner)) {
                caseJSON.contactSsoUsername = this.owner;
            }

            this.submittingCase = true;
            AlertService.addWarningMessage(gettextCatalog.getString('Creating case...'));
            strataService.cases.post(caseJSON).then(function (caseNumber) {
                AlertService.clearAlerts();
                AlertService.addSuccessMessage(gettextCatalog.getString('Successfully created case number {{caseNumber}}',{caseNumber:caseNumber}));
                self.clearLocalStorageCacheForNewCase();
                deferred.resolve(caseNumber);
            }, function (error) {
                AlertService.clearAlerts();
                AlertService.addStrataErrorMessage(error);
                self.submittingCase = false;
                deferred.reject();
            });
            return deferred.promise;
        };

        this.updateCase = function(){
            this.updatingCase = true;
            var deferred = $q.defer();
            var caseJSON = {};
            if (this.kase.type !== undefined && !angular.equals(this.prestineKase.type, this.kase.type)) {
                caseJSON.type = this.kase.type.name;
            }
            if (this.kase.severity !== undefined && !angular.equals(this.prestineKase.severity, this.kase.severity)) {
                caseJSON.severity = this.kase.severity.name;
            }
            if (this.kase.status !== undefined && !angular.equals(this.prestineKase.status, this.kase.status)) {
                caseJSON.status = this.kase.status.name;
            }
            if (this.kase.alternate_id !== undefined && !angular.equals(this.prestineKase.alternate_id, this.kase.alternate_id)) {
                caseJSON.alternateId = this.kase.alternate_id;
            }
            if (this.kase.product !== undefined && !angular.equals(this.prestineKase.product, this.kase.product)) {
                caseJSON.product = this.kase.product;
            }
            if (this.kase.version !== undefined && !angular.equals(this.prestineKase.version, this.kase.version)) {
                caseJSON.product = this.kase.product;
                caseJSON.version = this.kase.version;
            }
            if (RHAUtils.isNotEmpty(this.kase.group) && this.kase.group.number !== undefined && !angular.equals(this.prestineKase.group, this.kase.group)) {
                caseJSON.folderNumber = this.kase.group.number;
            }else if(!angular.equals(this.prestineKase.group, this.kase.group)){
                caseJSON.folderNumber = '';
            }
            if (RHAUtils.isNotEmpty(this.kase.fts) && !angular.equals(this.prestineKase.fts, this.kase.fts)) {
                caseJSON.fts = this.kase.fts;
            }
            if (this.kase.fts && !angular.equals(this.prestineKase.contact_info24_x7, this.kase.contact_info24_x7)) {
                caseJSON.contactInfo24X7 = this.kase.contact_info24_x7;
            }
            if (this.kase.notes !== null && !angular.equals(this.prestineKase.notes, this.kase.notes)) {
                caseJSON.notes = this.kase.notes;
            }
            if (this.kase.summary !== null && !angular.equals(this.prestineKase.summary, this.kase.summary) ) {
                caseJSON.summary = this.kase.summary;
            }
            strataService.cases.put(this.kase.case_number, caseJSON).then(angular.bind(this, function () {
                this.updatingCase = false;
                angular.copy(this.kase, this.prestineKase);
                deferred.resolve();
            }), function (error) {
                deferred.reject(error);
                this.updatingCase = false;
            });
            return deferred.promise;
        };
        this.updateLocalStorageForNewCase = function(){
            if(this.localStorageCache && RHAUtils.isEmpty(this.kase.case_number)) //as we have common component for product and version, adding extra condition for confirming its on new case
            {
                var draftNewCase = {};
                if(!RHAUtils.isEmpty(this.kase.description)){
                    draftNewCase.description = this.kase.description;
                }
                if(!RHAUtils.isEmpty(this.kase.problem)){
                    draftNewCase.problem = this.kase.problem;
                }
                if(!RHAUtils.isEmpty(this.kase.environment)){
                    draftNewCase.environment = this.kase.environment;
                }
                if(!RHAUtils.isEmpty(this.kase.occurance)){
                    draftNewCase.occurance = this.kase.occurance;
                }
                if(!RHAUtils.isEmpty(this.kase.urgency)){
                    draftNewCase.urgency = this.kase.urgency;
                }
                if(!RHAUtils.isEmpty(this.kase.summary)){
                    draftNewCase.summary = this.kase.summary;
                }
                if(!RHAUtils.isEmpty(this.kase.product)){
                    draftNewCase.product = this.kase.product;
                }
                if(!RHAUtils.isEmpty(this.kase.version)){
                    draftNewCase.version = this.kase.version;
                }
                var newCaseDescLocalStorage = {'text': draftNewCase};
                this.localStorageCache.put(securityService.loginStatus.authedUser.sso_username,newCaseDescLocalStorage);
            }
        };
        this.clearProdVersionFromLS = function(){
            this.kase.product = undefined;
            this.kase.version = undefined;
            this.updateLocalStorageForNewCase();
        };
        this.checkForCaseStatusToggleOnAttachOrComment = function(){
            var status = {};
            if (!securityService.loginStatus.authedUser.is_internal && this.kase.status.name === 'Closed') {
                status = { name: 'Waiting on Red Hat' };
                this.kase.status = status;
            }

            if(securityService.loginStatus.authedUser.is_internal){
                if (this.kase.status.name === 'Waiting on Red Hat') {
                    status = { name: 'Waiting on Customer' };
                    this.kase.status = status;
                }
            }else {
                if (this.kase.status.name === 'Waiting on Customer') {
                    status = { name: 'Waiting on Red Hat' };
                    this.kase.status = status;
                }
            }
        };
        this.setFilterSelectModel = function(sortField,sortOrder) {
            if(sortOrder === 'ASC') {
                if(sortField === 'lastModifiedDate') {
                    this.filterSelect = ConstantsService.sortByParams[1];
                } else if(sortField === 'severity') {
                    this.filterSelect = ConstantsService.sortByParams[2];
                } else if(sortField === 'createdDate') {
                    this.filterSelect = ConstantsService.sortByParams[5];
                } else if(sortField === 'owner') {
                    this.filterSelect = ConstantsService.sortByParams[6];
                } else if(sortField === 'status') {
                    this.filterSelect = ConstantsService.sortByParams[8];
                }
            } else if(sortOrder === 'DESC') {
                if(sortField === 'lastModifiedDate') {
                    this.filterSelect = ConstantsService.sortByParams[0];
                } else if(sortField === 'severity') {
                    this.filterSelect = ConstantsService.sortByParams[3];
                } else if(sortField === 'createdDate') {
                    this.filterSelect = ConstantsService.sortByParams[4];
                } else if(sortField === 'owner') {
                    this.filterSelect = ConstantsService.sortByParams[7];
                } else if(sortField === 'status') {
                    this.filterSelect = ConstantsService.sortByParams[9];
                }
            }
        };
    }
]);

'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').service('DiscussionService', [
    '$location',
    '$q',
    'AlertService',
    'AttachmentsService',
    'CaseService',
    'strataService',
    'HeaderService',
    function ($location, $q, AlertService, AttachmentsService, CaseService, strataService, HeaderService) {
        this.discussionElements = [];
        this.chatTranscriptList = [];
        this.comments = CaseService.comments;
        this.attachments = AttachmentsService.originalAttachments;
        this.loadingAttachments = false;
        this.loadingComments = false;
        this.commentTextBoxEnlargen = false;
        this.getDiscussionElements = function(caseId){
            var attachPromise = null;
            var commentsPromise = null;
            this.discussionElements = [];
            this.loadingAttachments = true;
            attachPromise = strataService.cases.attachments.list(caseId).then(angular.bind(this, function (attachmentsJSON) {
                AttachmentsService.defineOriginalAttachments(attachmentsJSON);
                this.loadingAttachments= false;
            }), angular.bind(this, function (error) {
                if(!HeaderService.pageLoadFailure) {
                    AlertService.addStrataErrorMessage(error);
                }
                this.loadingAttachments= false;
            }));
            commentsPromise = CaseService.populateComments(caseId).then(function () {
            }, function (error) {
                if(!HeaderService.pageLoadFailure) {
                    AlertService.addStrataErrorMessage(error);
                }
            });
            //TODO should this be done in case service???
            this.loadingComments = true;
            return $q.all([attachPromise, commentsPromise]);
        };
        this.updateElements = function(){
            this.comments = CaseService.comments;
            this.attachments = AttachmentsService.originalAttachments;
            this.discussionElements = this.comments.concat(this.attachments);
            if (this.chatTranscriptList !== undefined && this.chatTranscriptList.length > 0) {
                this.discussionElements = this.discussionElements.concat(this.chatTranscriptList);
            }
        };
    }
]);

'use strict';
/*jshint unused:vars */
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').service('GroupService', [
    'strataService',
    function (strataService) {
        this.reloadTable = {};
        this.groupsOnScreen = [];
        this.disableDeleteGroup = true;
    }
]);

'use strict';
/*jshint unused:vars */
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').service('GroupUserService', [
    'strataService',
    function (strataService) {
        this.reloadTable = {};
        this.groupsOnScreen = [];
    }
]);
'use strict';
angular.module('RedhatAccess.cases').service('ProductsService', [
	'$http',
	'securityService',
	'strataService',
    'CaseService',
    'AttachmentsService',
	'RHAUtils',
	'NEW_CASE_CONFIG',
	'NEW_DEFAULTS',
    'CASE_EVENTS',
    'AlertService',
	function ($http, securityService, strataService, CaseService, AttachmentsService, RHAUtils, NEW_CASE_CONFIG, NEW_DEFAULTS, CASE_EVENTS,AlertService) {
        this.products = [];
        this.productsDisabled = false;
        this.productsLoading = false;
        this.versions = [];
        this.versionDisabled = false;
        this.versionLoading = false;
        this.clear = function(){
            this.products = [];
            this.versions = [];
        };
        this.getProducts = function (fetchForContact) {
            this.clear();
            var contact = securityService.loginStatus.authedUser.sso_username;
            if(fetchForContact === true) {
                if (securityService.loginStatus.authedUser.is_internal) {
                    if (RHAUtils.isNotEmpty(CaseService.owner)) {
                        contact = CaseService.owner;  // When internal user creates case for another account
                    }
                }
            } else {
                this.productsLoading = true;
                if (securityService.loginStatus.authedUser.is_internal) {
                    if (RHAUtils.isNotEmpty(CaseService.kase.contact_sso_username)) {
                        contact = CaseService.kase.contact_sso_username; // When internal user views case of another account
                    }
                }
            }
            strataService.products.list(contact).then(angular.bind(this, function(response) {
        	    this.products = response;
                this.buildProductOptions();
                this.productsLoading = false;
                if (RHAUtils.isNotEmpty(NEW_DEFAULTS.product)) {
                    for(var i = 0; i < this.products.length; i++){
                        if(this.products[i].label === NEW_DEFAULTS.product){
                            CaseService.kase.product = this.products[i].value;
                            break;
                        }
                    }
                }
                if(RHAUtils.isNotEmpty(CaseService.kase.product)) {
                    //once we retrieve the product list, we should also retrieve versions
                    this.getVersions(CaseService.kase.product);
                }
            }), function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };

        this.buildProductOptions = function() {
            var productOptions = [];
            var productSortList = [];
            if(NEW_CASE_CONFIG.isPCM){
                $http.get(NEW_CASE_CONFIG.productSortListFile).then(angular.bind(this, function (response) {
                    if (response.status === 200 && response.data !== undefined) {
                        productSortList = response.data.split(',');
                        for(var i = 0; i < productSortList.length; i++) {
                            for (var j = 0 ; j < this.products.length ; j++) {
                                if (productSortList[i] === this.products[j].code) {
                                    var sortProduct = productSortList[i];
                                    productOptions.push({
                                        code: sortProduct,
                                        name: sortProduct
                                    });
                                    break;
                                }
                            }
                        }

                        var sep = '────────────────────────────────────────';
                        if (productOptions.length > 0) {
                            productOptions.push({
                                isDisabled: true,
                                name: sep
                            });
                        }

                        angular.forEach(this.products, function(product){
                            productOptions.push({
                                code: product.code,
                                name: product.name
                            });
                        }, this);

                        this.products = productOptions;
                    } else {
                        angular.forEach(this.products, function(product){
                            productOptions.push({
                                code: product.code,
                                name: product.name
                            });
                        }, this);
                        this.products = productOptions;
                    }
                }));
            } else {
                angular.forEach(this.products, function(product){
                    productOptions.push({
                        code: product.code,
                        name: product.name
                    });
                }, this);
                this.products = productOptions;
            }
        };
        this.fetchProductDetail = function (productCode) {
            AttachmentsService.suggestedArtifact = {};
            strataService.products.get(productCode).then(angular.bind(this, function (product) {
                if (product !== undefined && product.suggested_artifacts !== undefined && product.suggested_artifacts.suggested_artifact !== undefined) {
                    if (product.suggested_artifacts.suggested_artifact.length > 0) {
                        var description = product.suggested_artifacts.suggested_artifact[0].description;
                        if (description.indexOf('<a') > -1) {
                            description = description.replace("<a","<a target='_blank'");
                        }
                        AttachmentsService.suggestedArtifact.description = description;
                    }
                }
            }), function (error) {
                AlertService.addStrataErrorMessage(error);
            });
        };
        this.getVersions = function (product) {
            this.versionDisabled = true;
            this.versionLoading = true;
            strataService.products.versions(product).then(angular.bind(this, function (response) {
        	    response.sort(function (a, b) { //Added because of wrong order of versions
				    a = a.split('.');
				    b = b.split('.');
				    for( var i = 0; i < a.length; i++){
					    if(a[i] < b[i]){
						    return 1;
					    } else if(b[i] < a[i]){
						    return -1;
					    }
				    }
				    if(a.length > b.length){
					    return 1;
				    } else if (b.length > a.length){
					    return -1;
				    }
				    return 0;
			    });
                this.versions = response;
                this.versionDisabled = false;
                this.versionLoading = false;

                // if(RHAUtils.isNotEmpty(CaseService.kase.version) && (this.versions.indexOf(CaseService.kase.version) === -1))
                // {
                //     //this will get executed when existing product version is not available in version list of the given product
                //     //in this case drop down value is shown as 'Select an Option' and at that point submit button should be disabled
                //     CaseService.newCaseIncomplete = true;
                // }
			    //Fetch Recommendations
            }), function (error) {
                AlertService.addStrataErrorMessage(error);
            });


        //Retrieve the product detail, basically finding the attachment artifact
            this.fetchProductDetail(product);
        };
        this.showVersionSunset = function () {
            if (RHAUtils.isNotEmpty(CaseService.kase.product) && RHAUtils.isNotEmpty(CaseService.kase.version)) {
                if ((CaseService.kase.version).toLowerCase().indexOf('- eol') > -1) {
                    return true;
                }
            }
            return false;
        };
    }
]);

'use strict';
/*jshint unused:vars */
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').service('RecommendationsService', [
    'strataService',
    'CaseService',
    'AlertService',
    '$q',
    '$sanitize',
    'NEW_CASE_CONFIG',
    '$filter',
    'RHAUtils',
    function (strataService, CaseService, AlertService, $q, $sanitize, NEW_CASE_CONFIG,$filter,RHAUtils) {
        this.recommendations = [];
        this.pinnedRecommendations = [];
        this.handPickedRecommendations = [];
        var currentData = {
            product: null,
            version: null,
            summary: null,
            description: null
        };
        this.loadingRecommendations = false;
        var setCurrentData = function () {
            currentData= {
                product: CaseService.kase.product,
                version: CaseService.kase.version,
                summary: CaseService.kase.summary,
                description: CaseService.kase.description
            };
        };
        setCurrentData();
        this.clear = function () {
            this.recommendations = [];
            this.pinnedRecommendations = [];
            this.handPickedRecommendations = [];
            currentData = {
                product: null,
                version: null,
                summary: null,
                description: null
            };
        };

        this.populatePinnedRecommendations = function () {
            if (CaseService.kase.recommendations) {
                //Push any pinned recommendations to the front of the array
                if (CaseService.kase.recommendations.recommendation) {
                    angular.forEach(CaseService.kase.recommendations.recommendation, angular.bind(this, function (rec) {
                        if (rec.pinned_at) {
                            rec.pinned = true;
                            this.pinnedRecommendations.push(rec);
                        } if (rec.linked) {
                            rec.handPicked = true;
                            this.handPickedRecommendations.push(rec);
                        }
                    }));
                }
            }
        };

        this.getRecommendations = function (refreshRecommendations, max, objectToDiagnose) {
            var self = this;
            if (NEW_CASE_CONFIG.showRecommendations) {
                if(max === undefined){
                    max = 6;
                }
                var masterDeferred = $q.defer();

                var newData = objectToDiagnose;

                if(!RHAUtils.isNotEmpty(objectToDiagnose)){
                    newData = {
                        product: CaseService.kase.product,
                        version: CaseService.kase.version,
                        summary: CaseService.kase.summary,
                        description: CaseService.kase.description
                    };
                }

                if ((newData.product !== undefined || newData.version !== undefined || newData.summary !== undefined || newData.description !== undefined || (!angular.equals(currentData, newData) && !this.loadingRecommendations))) {
                    this.loadingRecommendations = true;
                    currentData = objectToDiagnose
                    strataService.recommendationsXmlHack(currentData, max, true, '%3Cstrong%3E%2C%3C%2Fstrong%3E').then(angular.bind(this, function (solutions) {
                        //retrieve details for each solution
                        if(refreshRecommendations){
                            this.recommendations = [];
                        }
                        solutions.forEach(angular.bind(this, function (solution) {
                            if (solution !== undefined) {
                                solution.resource_type = 'Solution';
                                try {
                                    solution.abstract = $sanitize(solution.abstract);
                                }
                                catch(err) {
                                    solution.abstract = '';
                                }
                                //this is to sync the case detail pinned recommendation with /rs/problems recommendation w.r.t pinned flag so that red pin will appear in both section
                                var pinnedRecommendation = $filter('filter')(self.pinnedRecommendations, function (rec) {return rec.resource_id === solution.resource_id;})[0];
                                if (RHAUtils.isNotEmpty(pinnedRecommendation)) {
                                    if (pinnedRecommendation.pinned_at) {
                                        solution.pinned = true;
                                    }
                                }
                                this.recommendations.push(solution);
                            }
                        }));
                        this.loadingRecommendations = false;
                        masterDeferred.resolve();
                    }), angular.bind(this, function (error) {
                        this.loadingRecommendations = false;
                        masterDeferred.reject();
                    }));
                } else {
                    masterDeferred.resolve();
                }
                return masterDeferred.promise;
            }
        };
    }
]);

'use strict';
/*jshint unused:vars */
/*jshint camelcase: false */
angular.module('RedhatAccess.cases').service('SearchBoxService', [
	'$rootScope',
	'CASE_EVENTS',
	'RHAUtils',
	function ($rootScope, CASE_EVENTS, RHAUtils) {
		this.onChange = function(){
			$rootScope.$broadcast(CASE_EVENTS.searchBoxChange);
			if (RHAUtils.isNotEmpty(this.searchTerm)) {
				this.disableSearchButton = false;
			} else {
				this.disableSearchButton = true;
			}
		};
        this.doSearch = function(){
			$rootScope.$broadcast(CASE_EVENTS.searchSubmit);
        };
        this.searchTerm = undefined;
        this.onKeyPress = {};
        this.disableSearchButton = true;
    }
]);

/*jshint camelcase: false*/
'use strict';
angular.module('RedhatAccess.cases').service('SearchCaseService', [
    'CaseService',
    'strataService',
    'AlertService',
    'STATUS',
    'CASE_GROUPS',
    'AUTH_EVENTS',
    '$q',
    '$rootScope',
    'SearchBoxService',
    'securityService',
    'COMMON_CONFIG',
    'RHAUtils',
    function (CaseService, strataService, AlertService, STATUS, CASE_GROUPS, AUTH_EVENTS, $q, $rootScope, SearchBoxService, securityService, COMMON_CONFIG, RHAUtils) {
        this.cases = [];
        this.totalCases = 0;
        this.searching = true;
        this.start = 0;
        this.count = 50;
        this.total = 0;
        this.allCasesDownloaded = false;
        this.refreshFilterCache=false;
        this.caseListPage = 1;
        this.caseListPageSize = 10;
        this.caseParameters = {
            searchTerm: '',
            status: STATUS.open,
            group: ''
        };
        this.previousGroupFilter = CASE_GROUPS.none;
        var getIncludeClosed = function (caseParameters) {
            if (caseParameters.status === STATUS.open) {
                return false;
            } else if (caseParameters.status === STATUS.closed) {
                return true;
            } else if (caseParameters.status === STATUS.both) {
                return true;
            }
            return true;
        };
        this.clear = function () {
            this.cases = [];
            this.oldQueryString = '';
            SearchBoxService.searchTerm = '';
            this.start = 0;
            this.total = 0;
            this.totalCases = 0;
            this.allCasesDownloaded = false;
            this.searching = true;
        };
        this.clearPagination = function () {
            this.start = 0;
            this.total = 0;
            this.allCasesDownloaded = false;
            this.cases = [];
        };
        this.oldQueryString = '';
        var queryString = '';

        this.doFilter = function (checkIsInternal) {
            this.previousGroupFilter = this.caseParameters.group;
            queryString = '';

            //TODO add internal and GS4
            // if(COMMON_CONFIG.isGS4 === true){
            //     params.account_number = "639769";
            // }
            var caseOwner = '';
            if (!COMMON_CONFIG.isGS4 && securityService.loginStatus.authedUser.sso_username && securityService.loginStatus.authedUser.is_internal && checkIsInternal === undefined || checkIsInternal === true) {
                caseOwner = "\"" + securityService.loginStatus.authedUser.first_name + " " + securityService.loginStatus.authedUser.last_name + "\"";
            }

            var promises = [];
            var deferred = $q.defer();
            //if (!angular.equals(queryString, this.oldQueryString)) {
            this.searching = true;
            this.oldQueryString = queryString;
            var that = this;
            var cases = null;
                //TODO add internal pallet
                // if (!COMMON_CONFIG.isGS4 && securityService.loginStatus.authedUser.sso_username && securityService.loginStatus.authedUser.is_internal && checkIsInternal === undefined || checkIsInternal === true) {
                //     params.associate_ssoname = securityService.loginStatus.authedUser.sso_username;
                //     //params.associate_ssoname = securityService.loginStatus.authedUser.sso_username;
                //     //params.view = 'internal';
                // }

            // Fetching the sort by parameter from localstorage
            if(CaseService.localStorageCache) {
                if (CaseService.localStorageCache.get('filterSelect'+securityService.loginStatus.authedUser.sso_username)) {
                    var filterSelectCache = CaseService.localStorageCache.get('filterSelect'+securityService.loginStatus.authedUser.sso_username);
                    CaseService.setFilterSelectModel(filterSelectCache.sortField,filterSelectCache.sortOrder);
                }
            }
            if(this.caseParameters.searchTerm === undefined || this.caseParameters.searchTerm === ''){
                var params = {
                    count: this.count,
                    include_closed: getIncludeClosed(this.caseParameters)
                };
                if(COMMON_CONFIG.isGS4 === true){
                    params.account_number = "639769";
                }
                params.start = this.start;

                //if (!RHAUtils.isEmpty(this.caseParameters.searchTerm)) {
                //    params.keyword = this.caseParameters.searchTerm;
                //}
                if (this.caseParameters.group === CASE_GROUPS.ungrouped || this.caseParameters.group === "-1") {
                    params.only_ungrouped = true;
                } else if (!RHAUtils.isEmpty(this.caseParameters.group)) {
                    params.group_numbers = { group_number: [this.caseParameters.group] };
                }
                if (this.caseParameters.status === STATUS.closed) {
                    params.status = STATUS.closed;
                }
                // Not doing product based searching
                // if (!RHAUtils.isEmpty(CaseService.product)) {
                //     params.product = CaseService.product;
                // }
                if (!RHAUtils.isEmpty(CaseService.filterSelect.sortField)) {
                    if(CaseService.filterSelect.sortField === 'owner'){
                        params.sort_field = 'contactName';
                    } else{
                        params.sort_field = CaseService.filterSelect.sortField;
                    }
                }
                if (!RHAUtils.isEmpty(CaseService.filterSelect.sortOrder)) {
                    //This is a hack because strata returns the severities in reverse order
                    if((CaseService.filterSelect.sortField === 'severity' || CaseService.filterSelect.sortField === 'status') && CaseService.filterSelect.sortOrder === 'ASC'){
                        params.sort_order = 'DESC';
                    } else if((CaseService.filterSelect.sortField === 'severity' || CaseService.filterSelect.sortField === 'status') && CaseService.filterSelect.sortOrder === 'DESC'){
                        params.sort_order = 'ASC';
                    } else{
                        params.sort_order = CaseService.filterSelect.sortOrder;
                    }
                }
                // if (!RHAUtils.isEmpty(CaseService.owner)) {
                //     params.owner_ssoname = CaseService.owner;
                // }
                if (!RHAUtils.isEmpty(CaseService.type)) {
                    params.type = CaseService.type;
                }
                if (!RHAUtils.isEmpty(CaseService.severity)) {
                    params.severity = CaseService.severity;
                }
                if (!COMMON_CONFIG.isGS4 && securityService.loginStatus.authedUser.sso_username && securityService.loginStatus.authedUser.is_internal && checkIsInternal === undefined || checkIsInternal === true) {
                    params.associate_ssoname = securityService.loginStatus.authedUser.sso_username;
                    params.view = 'internal';
                }
                if(this.refreshFilterCache===true)
                {
                    strataService.cache.clr('filter'+ JSON.stringify(params));
                    this.refreshFilterCache=false;
                }
                cases = strataService.cases.filter(params).then(angular.bind(that, function (response) {
                    if(response['case'] === undefined ){
                        that.totalCases = 0;
                        that.total = 0;
                        that.allCasesDownloaded = true;
                    } else {
                        that.totalCases = response.total_count;
                        if (response['case'] !== undefined && response['case'].length + that.total >= that.totalCases) {
                            that.allCasesDownloaded = true;
                        }
                        if (response['case'] !== undefined){
                            that.cases = that.cases.concat(response['case']);
                            //that.count = response['case'].length + that.total
                            that.start = that.start + that.count;
                            that.total = that.total + response['case'].length;
                        }
                    }
                    that.searching = false;
                    deferred.resolve(cases);
                }), angular.bind(that, function (error) {
                    if(error.xhr.status === 404){
                        this.doFilter(false).then(function () {
                            deferred.resolve(cases);
                        });
                    } else{
                        AlertService.addStrataErrorMessage(error);
                        that.searching = false;
                        deferred.resolve(cases);
                    }
                }));
            } else{
                var sortField = CaseService.filterSelect.sortField;
                if(sortField === "owner"){
                    sortField = "contactName";
                }
                cases = strataService.cases.search(this.caseParameters.status, null, this.caseParameters.group, null, this.caseParameters.searchTerm, sortField, CaseService.filterSelect.sortOrder, this.start, this.count, null, null).then(angular.bind(that, function (response) {
                    if(response['case'] === undefined){
                        that.totalCases = 0;
                        that.total = 0;
                        that.allCasesDownloaded = true;
                    } else {
                        that.totalCases = response.total_count;
                        that.cases = that.cases.concat(response['case']);
                        that.start = that.start + that.count;
                        that.total = that.total + response['case'].length;
                        if (response['case'] !== undefined && response['case'].length + that.total >= that.totalCases) {
                            that.allCasesDownloaded = true;
                        }
                    }
                    that.searching = false;
                    deferred.resolve(cases);
                }), angular.bind(that, function (error) {
                    if(error.xhr.status === 404){
                        this.doFilter(false).then(function () {
                            deferred.resolve(cases);
                        });
                    } else{
                        AlertService.addStrataErrorMessage(error);
                        that.searching = false;
                        deferred.resolve(cases);
                    }
                }));
            }
            promises.push(deferred.promise);
            return $q.all(promises);
        };
    }
]);

'use strict';
angular.module('RedhatAccess.logViewer').controller('AccordionDemoCtrl', [
    '$scope',
    'accordian',
    function ($scope, accordian) {
        $scope.oneAtATime = true;
        $scope.groups = accordian.getGroups();
    }
]);
/*global parseList*/
'use strict';
angular.module('RedhatAccess.logViewer').controller('DropdownCtrl', [
    '$scope',
    '$http',
    '$location',
    'files',
    'hideMachinesDropdown',
    'AlertService',
    'translate',
    function ($scope, $http, $location, files, hideMachinesDropdown, AlertService,translate) {
        $scope.machinesDropdownText = translate('Please Select the Machine');
        $scope.items = [];
        $scope.hideDropdown = hideMachinesDropdown.value;
        $scope.loading = false;
        var sessionId = $location.search().sessionId;
        $scope.getMachines = function () {
            $http({
                method: 'GET',
                url: 'machines?sessionId=' + encodeURIComponent(sessionId)
            }).success(function (data, status, headers, config) {
                $scope.items = data;
            }).error(function (data, status, headers, config) {
                AlertService.addDangerMessage(data);
            });
        };
        $scope.machineSelected = function () {
            $scope.loading = true;
            var sessionId = $location.search().sessionId;
            var userId = $location.search().userId;
            files.selectedHost = this.choice;
            $scope.machinesDropdownText = this.choice;
            $http({
                method: 'GET',
                url: 'logs?machine=' + files.selectedHost + '&sessionId=' + encodeURIComponent(sessionId) + '&userId=' + encodeURIComponent(userId)
            }).success(function (data, status, headers, config) {
                $scope.loading = false;
                var tree = [];
                parseList(tree, data);
                files.setFileList(tree);
            }).error(function (data, status, headers, config) {
                $scope.loading = false;
                AlertService.addDangerMessage(data);
            });
        };
        if ($scope.hideDropdown) {
            $scope.machineSelected();
        } else {
            $scope.getMachines();
        }
    }
]);

'use strict';
angular.module('RedhatAccess.logViewer').controller('TabsDemoCtrl', [
    '$rootScope',
    '$scope',
    '$http',
    '$location',
    'files',
    'accordian',
    'SearchResultsService',
    'securityService',
    'AlertService',
    'LOGVIEWER_EVENTS',
    function ($rootScope, $scope, $http, $location, files, accordian, SearchResultsService, securityService, AlertService, LOGVIEWER_EVENTS) {
        $scope.tabs = [];
        $scope.isLoading = false;
        $scope.$watch(function () {
            return files.getFileClicked().check;
        }, function () {
            if (files.getFileClicked().check && files.selectedFile !== undefined) {
                var tab = {};
                if (files.selectedHost !== undefined) {
                    tab.longTitle = files.selectedHost + ':';
                } else {
                    tab.longTitle = '';
                }
                tab.longTitle = tab.longTitle.concat(files.selectedFile);
                var splitFileName = files.selectedFile.split('/');
                var fileName = splitFileName[splitFileName.length - 1];
                if (files.selectedHost !== undefined) {
                    tab.shortTitle = files.selectedHost + ':';
                } else {
                    tab.shortTitle = '';
                }
                tab.shortTitle = tab.shortTitle.concat(fileName);
                tab.active = true;
                $scope.tabs.push(tab);
                $scope.isLoading = true;
                files.setActiveTab(tab);
                files.setFileClicked(false);
            }
        });
        $scope.$watch(function () {
            return files.file;
        }, function () {
            if (files.file && files.activeTab) {
                files.activeTab.content = files.file;
                $scope.isLoading = false;
                files.file = undefined;
            }
        });
        $scope.$watch(function () {
            return SearchResultsService.searchInProgress.value;
        }, function () {
            if (SearchResultsService.searchInProgress.value === true) {
                $scope.$parent.isDisabled = true;
            } else if (SearchResultsService.searchInProgress.value === false && $scope.$parent.textSelected === true) {
                $scope.$parent.isDisabled = false;
            }
        });
        $scope.removeTab = function (index) {
            $scope.tabs.splice(index, 1);
            if ($scope.tabs.length < 1) {
                $rootScope.$broadcast(LOGVIEWER_EVENTS.allTabsClosed);
            }
        };
        $scope.checked = false;
        // This will be
        // binded using the
        // ps-open attribute
        $scope.diagnoseText = function () {
            //$scope.isDisabled = true;
            var text = strata.utils.getSelectedText();
            securityService.validateLogin(true).then(function () {
                //Removed in refactor, no loger exists.  Think it hides tool tip??
                //this.tt_isOpen = false;
                if (!$scope.$parent.showSolutions) {
                    $scope.$parent.showSolutions = !$scope.$parent.showSolutions;
                }
                if (text !== '') {
                    $scope.checked = !$scope.checked;
                    SearchResultsService.diagnose(text, 5);
                }
            });    // this.tt_isOpen = false;
                   // if (!$scope.$parent.solutionsToggle) {
                   // 	$scope.$parent.solutionsToggle = !$scope.$parent.solutionsToggle;
                   // }
                   // var text = strata.utils.getSelectedText();
                   // if (text != "") {
                   // 	$scope.checked = !$scope.checked;
                   // 	SearchResultsService.diagnose(text, 5);
                   // }
                   //$scope.sleep(5000, $scope.checkTextSelection);
        };
        $scope.refreshTab = function (index) {
            var sessionId = $location.search().sessionId;
            var userId = $location.search().userId;
            var fileNameForRefresh = this.$parent.tab.longTitle;
            var hostForRefresh = null;
            var splitNameForRefresh = fileNameForRefresh.split(':');
            if (splitNameForRefresh[0] && splitNameForRefresh[1]) {
                $scope.isLoading = true;
                hostForRefresh = splitNameForRefresh[0];
                fileNameForRefresh = splitNameForRefresh[1];
                $http({
                    method: 'GET',
                    url: 'logs?sessionId=' + encodeURIComponent(sessionId) + '&userId=' + encodeURIComponent(userId) + '&path=' + fileNameForRefresh + '&machine=' + hostForRefresh
                }).success(function (data, status, headers, config) {
                    $scope.isLoading = false;
                    $scope.tabs[index].content = data;
                }).error(function (data, status, headers, config) {
                    $scope.isLoading = false;
                    AlertService.addDangerMessage(data);
                });
            }
        };
    }
]);
'use strict';
angular.module('RedhatAccess.logViewer').controller('fileController', [
    '$scope',
    '$http',
    '$location',
    'files',
    'AlertService',
    'LOGVIEWER_EVENTS',
    function ($scope, $http, $location, files, AlertService, LOGVIEWER_EVENTS) {
        $scope.roleList = '';
        $scope.retrieveFileButtonIsDisabled = files.getRetrieveFileButtonIsDisabled();
        $scope.$watch(function () {
            return $scope.mytree.currentNode;
        }, function () {
            if ($scope.mytree.currentNode !== undefined && $scope.mytree.currentNode.fullPath !== undefined) {
                files.setSelectedFile($scope.mytree.currentNode.fullPath);
                files.setRetrieveFileButtonIsDisabled(false);
            } else {
                files.setRetrieveFileButtonIsDisabled(true);
            }
        });
        $scope.$watch(function () {
            return files.fileList;
        }, function () {
            $scope.roleList = files.fileList;
        });

        $scope.selectItem = function(){
            if(files.selectedFile !== undefined && !files.getRetrieveFileButtonIsDisabled()){
                $scope.fileSelected();
            }
        };

        $scope.fileSelected = function () {
            files.setFileClicked(true);
            var sessionId = $location.search().sessionId;
            var userId = $location.search().userId;
            $scope.$parent.$parent.sidePaneToggle = !$scope.$parent.$parent.sidePaneToggle;
            $http({
                method: 'GET',
                url: 'logs?sessionId=' + encodeURIComponent(sessionId) + '&userId=' + encodeURIComponent(userId) + '&path=' + files.selectedFile + '&machine=' + files.selectedHost
            }).success(function (data, status, headers, config) {
                if(data !== ""){
                    files.file = data;
                } else {
                    files.file = " ";
                }
            }).error(function (data, status, headers, config) {
                AlertService.addDangerMessage(data);
            });
        };
        $scope.$on(LOGVIEWER_EVENTS.allTabsClosed, function () {
            $scope.$parent.$parent.sidePaneToggle = !$scope.$parent.$parent.sidePaneToggle;
        });
    }
]);

'use strict';
angular.module('RedhatAccess.logViewer').controller('logViewerController', [
    '$scope',
    'SearchResultsService',
    function ($scope, SearchResultsService) {
        $scope.isDisabled = true;
        $scope.textSelected = false;
        $scope.showSolutions = false;
        $scope.enableDiagnoseButton = function () {
            //Gotta wait for text to "unselect"
            $scope.sleep(1, $scope.checkTextSelection);
        };
        $scope.checkTextSelection = function () {
            if (strata.utils.getSelectedText()) {
                $scope.textSelected = true;
                if (SearchResultsService.searchInProgress.value) {
                    $scope.isDisabled = true;
                } else {
                    $scope.isDisabled = false;
                }
            } else {
                $scope.textSelected = false;
                $scope.isDisabled = true;
            }
            $scope.$apply();
        };
        $scope.sleep = function (millis, callback) {
            setTimeout(function () {
                callback();
            }, millis);
        };
        $scope.toggleSolutions = function () {
            $scope.showSolutions = !$scope.showSolutions;
        };
    }
]);
'use strict';
angular.module('RedhatAccess.logViewer').directive('rhaFilldown', [
    '$window',
    '$timeout',
    function ($window, $timeout) {
        return {
            restrict: 'A',
            link: function postLink(scope, element) {
                scope.onResizeFunction = function () {
                    var distanceToTop = element[0].getBoundingClientRect().top;
                    var height = $window.innerHeight - distanceToTop - 21;
                    if (element[0].id === 'fileList') {
                        height -= 34;
                    }
                    scope.windowHeight = height;
                    return scope.windowHeight;
                };
                // This might be overkill??
                //scope.onResizeFunction();
                angular.element($window).bind('resize', function () {
                    scope.onResizeFunction();
                    scope.$apply();
                });
                angular.element($window).bind('click', function () {
                    scope.onResizeFunction();
                    scope.$apply();
                });
                $timeout(scope.onResizeFunction, 100);    // $(window).load(function(){
                                                          //  scope.onResizeFunction();
                                                          //  scope.$apply();
                                                          // });
                                                          // scope.$on('$viewContentLoaded', function() {
                                                          //  scope.onResizeFunction();
                                                          //  //scope.$apply();
                                                          // });
            }
        };
    }
]);
'use strict';
angular.module('RedhatAccess.logViewer').directive('rhaLogtabs', function () {
    return {
        templateUrl: 'log_viewer/views/logTabs.html',
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
        }
    };
});
'use strict';
angular.module('RedhatAccess.logViewer').directive('rhaLogsinstructionpane', function () {
    return {
        templateUrl: 'log_viewer/views/logsInstructionPane.html',
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
        }
    };
});
'use strict';
angular.module('RedhatAccess.logViewer').directive('rhaNavsidebar', function () {
    return {
        templateUrl: 'log_viewer/views/navSideBar.html',
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
        }
    };
});
'use strict';
angular.module('RedhatAccess.logViewer').directive('rhaRecommendations', function () {
    return {
        templateUrl: 'log_viewer/views/recommendations.html',
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
        }
    };
});
'use strict';
angular.module('RedhatAccess.logViewer').service('accordian', function () {
    var groups = [];
    return {
        getGroups: function () {
            return groups;
        },
        addGroup: function (group) {
            groups.push(group);
        },
        clearGroups: function () {
            groups = '';
        }
    };
});
'use strict';
angular.module('RedhatAccess.logViewer').factory('files', function () {
    var fileList = '';
    var selectedFile = '';
    var file = '';
    var retrieveFileButtonIsDisabled = { check: true };
    var fileClicked = { check: false };
    var activeTab = null;
    return {
        getFileList: function () {
            return fileList;
        },
        setFileList: function (fileList) {
            this.fileList = fileList;
        },
        getSelectedFile: function () {
            return selectedFile;
        },
        setSelectedFile: function (selectedFile) {
            this.selectedFile = selectedFile;
        },
        getFile: function () {
            return file;
        },
        setFile: function (file) {
            this.file = file;
        },
        setRetrieveFileButtonIsDisabled: function (isDisabled) {
            retrieveFileButtonIsDisabled.check = isDisabled;
        },
        getRetrieveFileButtonIsDisabled: function () {
            return retrieveFileButtonIsDisabled.check;
        },
        setFileClicked: function (isClicked) {
            fileClicked.check = isClicked;
        },
        getFileClicked: function () {
            return fileClicked;
        },
        setActiveTab: function (activeTab) {
            this.activeTab = activeTab;
        },
        getActiveTab: function () {
            return activeTab;
        }
    };
});
'use strict';
angular.module('RedhatAccess.escalation').controller('EscalationRequest', [
    '$scope',
    'EscalationRequestService',
    '$location',
    'RHAUtils',
    'ESCALATION_TYPE',
    'AUTH_EVENTS',
    'AlertService',
    'securityService',
    'HeaderService',
    'gettextCatalog',
    function ($scope, EscalationRequestService, $location, RHAUtils, ESCALATION_TYPE, AUTH_EVENTS, AlertService , securityService , HeaderService, gettextCatalog) {
        $scope.EscalationRequestService = EscalationRequestService;
        $scope.HeaderService = HeaderService;
        $scope.securityService = securityService;
        $scope.disableSendRequest = true;
        $scope.ESCALATION_TYPE = ESCALATION_TYPE;
        $scope.partnerGeoList = ['NA','EMEA','LATAM','APAC'];
        $scope.iceGeoList = ['NA','EMEA','LATAM','APAC','Combo'];

        $scope.submitEscalationRequest = function(escalationType) {
            var recordType = '';
            var emailCheck = true;
            if (escalationType === ESCALATION_TYPE.partner) {
                recordType = ESCALATION_TYPE.partner;
            } else if (escalationType === ESCALATION_TYPE.ice) {
                recordType = ESCALATION_TYPE.ice;
                emailCheck = $scope.validateEmailField();
            } else if (escalationType === ESCALATION_TYPE.sales) {
                recordType = ESCALATION_TYPE.sales;
            }
            if (emailCheck) {
                $scope.disableSendRequest = true;
                EscalationRequestService.sendEscalationRequest(recordType);
            }
        };
        $scope.partnerMandatoryFieldCheck = function() {
            if (RHAUtils.isNotEmpty(EscalationRequestService.accountNumber) && RHAUtils.isNotEmpty(EscalationRequestService.caseNumber)
                && RHAUtils.isNotEmpty(EscalationRequestService.geo) && RHAUtils.isNotEmpty(EscalationRequestService.issueDescription)) {
                $scope.disableSendRequest = false;
            } else {
                $scope.disableSendRequest = true;
            }
        };
        $scope.iceMandatoryFieldCheck = function() {
            if (RHAUtils.isNotEmpty(EscalationRequestService.accountNumber) && RHAUtils.isNotEmpty(EscalationRequestService.caseNumber)
                && RHAUtils.isNotEmpty(EscalationRequestService.geo) && RHAUtils.isNotEmpty(EscalationRequestService.issueDescription)
                && RHAUtils.isNotEmpty(EscalationRequestService.requestorEmail) && RHAUtils.isNotEmpty(EscalationRequestService.requestorPhone)
                && RHAUtils.isNotEmpty(EscalationRequestService.customerName) && RHAUtils.isNotEmpty(EscalationRequestService.customerEmail)
                && RHAUtils.isNotEmpty(EscalationRequestService.customerPhone) && RHAUtils.isNotEmpty(EscalationRequestService.expectations)) {
                $scope.disableSendRequest = false;
            } else {
                $scope.disableSendRequest = true;
            }
        };
        $scope.validateEmailField = function() {
            if (RHAUtils.isEmailValid(EscalationRequestService.requestorEmail) && RHAUtils.isEmailValid(EscalationRequestService.customerEmail)) {
                if (EscalationRequestService.requestorEmail.search('redhat.com') > 0) {
                    return true;
                } else {
                    AlertService.addWarningMessage(gettextCatalog.getString('Please check the requestor email address'));
                }
            } else {
                AlertService.addWarningMessage(gettextCatalog.getString('Email address is incorrect'));
            }
            return false;
        };
        $scope.$on(AUTH_EVENTS.loginSuccess, function () {
            AlertService.clearAlerts();
        });
    }
]);

'use strict';
/*jshint camelcase: false */
angular.module('RedhatAccess.escalation').service('EscalationRequestService', [
    'strataService',
    'AlertService',
    'RHAUtils',
    'ESCALATION_TYPE',
    'securityService',
    'HeaderService',
    'gettextCatalog',
    function (strataService, AlertService, RHAUtils, ESCALATION_TYPE, securityService, HeaderService, gettextCatalog) {

	    this.accountNumber = '';
	    this.caseNumber = '';
	    this.alreadyEscalated = false;
	    this.requestorEmail = '';
	    this.requestorPhone = '';
	    this.customerName = '';
	    this.customerEmail = '';
	    this.customerPhone = '';
	    this.geo = '';
	    this.expectations = '';
	    this.issueDescription = '';
        this.notPartnerLogin = false;

	    this.clearEscalationFields = function() {
            this.accountNumber = '';
            this.caseNumber = '';
            this.alreadyEscalated = false;
            this.requestorEmail = '';
            this.requestorPhone = '';
            this.customerName = '';
            this.customerEmail = '';
            this.customerPhone = '';
            this.geo = '';
            this.expectations = '';
            this.issueDescription = '';
        };

	    this.sendEscalationRequest = function(recordType) {
            var subject = '';
            if (recordType === ESCALATION_TYPE.partner) {
                subject = 'Partner Escalation through Portal Case Management';
            } else {
                subject = 'Ice Escalation through Portal Case Management';
            }
            var escalationJSON = {
                'record_type': recordType,
                'subject': subject
            };
            var isObjectNothing = function (object) {
                if (object === '' || object === undefined || object === null) {
                    return true;
                } else {
                    return false;
                }
            };

            if (!isObjectNothing(this.accountNumber)) {
                escalationJSON.account_number = this.accountNumber;
            }
            if (!isObjectNothing(this.caseNumber)) {
                escalationJSON.case_number = this.caseNumber;
            }
            if (!isObjectNothing(this.customerName)) {
                escalationJSON.customer_name = this.customerName;
            }
            if (!isObjectNothing(this.customerEmail)) {
                escalationJSON.customer_email = this.customerEmail;
            }
            if (!isObjectNothing(this.customerPhone)) {
                escalationJSON.customer_phone = this.customerPhone;
            }
            if (!isObjectNothing(this.requestorEmail)) {
                escalationJSON.requestor_email = this.requestorEmail;
            }
            if (!isObjectNothing(this.requestorPhone)) {
                escalationJSON.requestor_phone = this.requestorPhone;
            }
            if (!isObjectNothing(this.issueDescription)) {
                escalationJSON.issue_description = this.issueDescription;
            }
            if (!isObjectNothing(this.alreadyEscalated)) {
                escalationJSON.already_escalated = this.alreadyEscalated;
            }
            if (!isObjectNothing(this.geo)) {
                escalationJSON.geo = this.geo;
            }
            if (!isObjectNothing(this.expectations)) {
                escalationJSON.expectations = this.expectations;
            }
            if (recordType === ESCALATION_TYPE.partner) {
                AlertService.clearAlerts();
                AlertService.addSuccessMessage(gettextCatalog.getString('Creating Partner Escalation request .....'));
            } else {
                AlertService.clearAlerts();
                AlertService.addSuccessMessage(gettextCatalog.getString('Creating Ice Escalation request .....'));
            }
            strataService.escalationRequest.create(escalationJSON).then(angular.bind(this,function (escalationNum) {
                AlertService.clearAlerts();
                if (escalationNum !== undefined) {
                    if (recordType === ESCALATION_TYPE.partner) {
                        AlertService.addSuccessMessage(gettextCatalog.getString('Your Partner Escalation request has been sent successfully'));
                    } else {
                        AlertService.addSuccessMessage(gettextCatalog.getString('Your Ice Escalation request has been sent successfully'));
                    }
                    this.clearEscalationFields();
                }
            }), angular.bind(this, function (error) {
                if (error.xhr.status === 403) {
                    AlertService.clearAlerts();
                    HeaderService.showPartnerEscalationError = true;
                } else {
                    AlertService.addStrataErrorMessage(error);
                }
            }));
	    };
	}
]);

angular.module('RedhatAccess.template', ['search/views/accordion_search.html', 'search/views/accordion_search_results.html', 'search/views/list_search_results.html', 'search/views/resultDetail.html', 'search/views/search.html', 'search/views/search_form.html', 'search/views/standard_search.html', 'cases/views/accountSelect.html', 'cases/views/addCommentSection.html', 'cases/views/attachLocalFile.html', 'cases/views/attachProductLogs.html', 'cases/views/attachmentsSection.html', 'cases/views/commonConfirmationModal.html', 'cases/views/compact.html', 'cases/views/createGroupButton.html', 'cases/views/createGroupModal.html', 'cases/views/defaultGroup.html', 'cases/views/deleteGroupButton.html', 'cases/views/descriptionSection.html', 'cases/views/detailsSection.html', 'cases/views/discussionSection.html', 'cases/views/edit.html', 'cases/views/editCaseRecommendationsSection.html', 'cases/views/editGroup.html', 'cases/views/emailNotifySelect.html', 'cases/views/entitlementSelect.html', 'cases/views/exportCSVButton.html', 'cases/views/filterSelect.html', 'cases/views/group.html', 'cases/views/groupList.html', 'cases/views/groupSelect.html', 'cases/views/list.html', 'cases/views/listAttachments.html', 'cases/views/listBugzillas.html', 'cases/views/listFilter.html', 'cases/views/listNewAttachments.html', 'cases/views/new.html', 'cases/views/newCaseRecommendationsSection.html', 'cases/views/ownerSelect.html', 'cases/views/proceedWithoutAttachModal.html', 'cases/views/productSelect.html', 'cases/views/requestEscalation.html', 'cases/views/requestManagementEscalationModal.html', 'cases/views/searchBox.html', 'cases/views/selectLoadingIndicator.html', 'cases/views/severitySelect.html', 'cases/views/statusSelect.html', 'cases/views/typeSelect.html', 'cases/views/versionSelect.html', 'log_viewer/views/logTabs.html', 'log_viewer/views/log_viewer.html', 'log_viewer/views/logsInstructionPane.html', 'log_viewer/views/navSideBar.html', 'log_viewer/views/recommendations.html', 'escalation/views/iceEscalation.html', 'escalation/views/partnerEscalation.html']);

angular.module("search/views/accordion_search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/views/accordion_search.html",
    "<div class=\"container-fluid rha-side-padding\">\n" +
    "    <div rha-header title=\"Search\"></div>\n" +
    "    <div class=\"row\" rha-searchform ng-controller='SearchController'></div>\n" +
    "    <div style=\"padding-top: 10px;\"></div>\n" +
    "    <div class='row'>\n" +
    "    	<div class=\"container\" rha-accordionsearchresults='' ng-controller='SearchController' />\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("search/views/accordion_search_results.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/views/accordion_search_results.html",
    "<div class=\"row rha-bottom-border\">\n" +
    "    <div class=\"col-xs-6\">\n" +
    "        <div style=\"padding-bottom: 0\">\n" +
    "            <span>\n" +
    "                <h4 style=\"padding-left: 10px; display: inline-block;\" translate=''>Recommendations</h4>\n" +
    "            </span>\n" +
    "            <span ng-show=\"searchInProgress.value\" class=\"rha-search-spinner\">\n" +
    "                &nbsp;\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding-bottom: 14px;\" class=\"col-xs-6\" ng-show=\"showOpenCaseBtn()\">\n" +
    "        <a href={{getOpenCaseRef()}} class=\"btn btn-primary pull-right \">{{'Open a New Support Case'|translate}}</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"\">\n" +
    "    <!--div class=\"col-xs-12\" style=\"overflow: auto;\" rha-resizable rha-dom-ready=\"domReady\"-->\n" +
    "        <div accordion=''>\n" +
    "            <div accordion-group='' is-open=\"isopen\" ng-click=\"triggerAnalytics($event)\" ng-repeat=\"result in results track by $index\">\n" +
    "                <div accordion-heading=''>\n" +
    "                    <span class=\"pull-left glyphicon\" ng-class=\"{'glyphicon-chevron-down': isopen, 'glyphicon-chevron-right': !isopen}\"></span>\n" +
    "                    <span class=\"result-title\">&nbsp{{result.title}}</span>\n" +
    "                </div>\n" +
    "                <div rha-resultdetaildisplay result='result' />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    <!--/div-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("search/views/list_search_results.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/views/list_search_results.html",
    "<div class=\"col-sm-4\">\n" +
    "    <div class=\"panel panel-default\" ng-show='results.length > 0'>\n" +
    "        <!--pagination on-select-page=\"pageChanged(page)\" total-items=\"totalItems\" page=\"currentPage\" max-size=\"maxSize\"></pagination-->\n" +
    "\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <h4 class=\"panel-title\" translate=''>\n" +
    "                Recommendations\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <div id='solutions' class=\"list-group\">\n" +
    "            <a href=\"\" ng-click=\"solutionSelected($index)\" class='list-group-item' ng-class=\"{'active': selectedSolution.index===$index}\" ng-repeat=\"result in results track by $index\" style=\"word-wrap: break-word;\"> <i class=\"glyphicon glyphicon-chevron-right pull-right\"></i>{{ result.title }}</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div id=\"rha-solution-display\" class=\"col-sm-8\" style=\"overflow: auto;\" rha-resizable rha-domready=\"domReady\">\n" +
    "    <div class=\"alert alert-info\" ng-show='selectedSolution.index === -1 && results.length > 0'>\n" +
    "        {{'To view a recommendation, click on it.'|translate}}\n" +
    "    </div>\n" +
    "    <div style \"overflow: vertical;\">\n" +
    "        <div rha-resultdetaildisplay result='selectedSolution.data' />\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("search/views/resultDetail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/views/resultDetail.html",
    "<div class='panel' style='border:0' ng-model=\"result\" ng-click=\"resultClickCapture($event, result)\">\n" +
    "	<div ng-if=\"isSolution()\">\n" +
    "		<h3 translate=''>Environment</h3>\n" +
    "		<div ng-bind-html='result.environment.html'></div>\n" +
    "		<h3>Issue</h3>\n" +
    "		<div ng-bind-html='result.issue.html | trust_html'></div>\n" +
    "		<div ng-if=\"getSolutionResolution() !== ''\">\n" +
    "			<h3  translate=''>Resolution</h3>\n" +
    "		</div>\n" +
    "		<div ng-bind-html='getSolutionResolution() | trust_html'></div>\n" +
    "	</div>\n" +
    "	<div ng-if=\"isArticle()\">\n" +
    "		<div ng-bind-html='getArticleHtml() | trust_html'></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("search/views/search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/views/search.html",
    "<div rha-standardsearch/>\n" +
    "");
}]);

angular.module("search/views/search_form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/views/search_form.html",
    "<div class='col-sm-4 pull-left'>\n" +
    "    <form role=\"form\" id=\"rh-search\">\n" +
    "        <div ng-class=\"{'col-sm-8': searchInProgress.value}\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"rhSearchStr\" name=\"searchString\" ng-model=\"searchStr\" class=\"input-xxlarge\" placeholder=\"{{'Search Articles and Solutions'|translate}}\">\n" +
    "                <span class=\"input-group-btn\">\n" +
    "                    <button ng-disabled=\"(searchStr === undefined || searchStr.trim()==='' || searchInProgress.value === true)\" class=\"btn btn-default btn-primary\" type='submit' ng-click=\"search(searchStr)\">\n" +
    "                        <i class=\"glyphicon glyphicon-search \"></i>\n" +
    "                        {{'Search'|translate}}</button>\n" +
    "                </span>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 \" ng-show=\"searchInProgress.value\">\n" +
    "            <span class=\"rha-search-spinner\">\n" +
    "                &nbsp;\n" +
    "            </span>\n" +
    "        </div>\n" +
    "\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("search/views/standard_search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/views/standard_search.html",
    "<div class=\"container-fluid rha-side-padding\" ng-controller='SearchController'>\n" +
    "    <div rha-header page=\"search\"></div>\n" +
    "    <div class=\"row\" rha-searchform></div>\n" +
    "    <div style=\"padding-top: 10px;\"></div>\n" +
    "    <div class='row' rha-listsearchresults='' ng-controller='SearchController' />\n" +
    "</div>\n" +
    "");
}]);

angular.module("cases/views/accountSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/accountSelect.html",
    "<div style=\"display: inline-block; padding-right: 10px;\"><input id=\"rha-account-number\" style=\"width: 100%\" ng-model=\"CaseService.account.number\" ng-blur=\"populateAccountSpecificFields()\" class=\"form-control\"/></div><div style=\"display: inline-block;\"><span ng-click=\"selectUserAccount()\" ng-hide=\"loadingAccountNumber\" translate=\"\" class=\"link\">Find My Account Number</span><div ng-show=\"loadingAccountNumber\" class=\"spinner spinner-inline\">&nbsp;</div></div>");
}]);

angular.module("cases/views/addCommentSection.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/addCommentSection.html",
    "<div class=\"row\"><div class=\"col-sm-12\"><div ng-if=\"securityService.loginStatus.authedUser.is_internal\" class=\"pull-right\"><span>&nbsp{{'Is Public:'|translate}}&nbsp;</span><input id=\"rha-case-comment-isPublic\" type=\"checkbox\" ng-model=\"CaseService.isCommentPublic\" ng-change=\"onCommentPublicChange()\"/></div></div></div><textarea id=\"case-comment-box\" ng-disabled=\"addingComment\" maxlength=\"32000\" rows=\"5\" ng-model=\"CaseService.commentText\" ng-change=\"onNewCommentKeypress()\" ng-click=\"DiscussionService.commentTextBoxEnlargen=true\" ng-class=\"{&quot;expanded&quot;: DiscussionService.commentTextBoxEnlargen}\" ng-blur=\"shouldTextboxMinimize()\" class=\"comment expand form-control\"></textarea><div ng-show=\"EDIT_CASE_CONFIG.showAttachments &amp;&amp; securityService.loginStatus.authedUser.can_add_attachments\"><div rha-listnewattachments=\"\"></div></div><div class=\"row\"><div class=\"col-xs-7\"><div id=\"commentNotice\" ng-hide=\"progressCount &lt; 90\" class=\"uploadNotice\"><span class=\"progressBarWrap\"><span translate=\"translate\" class=\"progressCount\">{{charactersLeft}} characters left.</span></span></div><div ng-hide=\"ie8 || ie9 || !EDIT_CASE_CONFIG.showAttachments || !securityService.loginStatus.authedUser.can_add_attachments\" rha-attachlocalfile=\"\" disabled=\"CaseService.submittingCase\"><div ng-bind-html=\"AttachmentsService.parseArtifactHtml()\" class=\"margin-top-short\"></div></div><div ng-show=\"EDIT_CASE_CONFIG.showAttachments &amp;&amp; securityService.loginStatus.authedUser.can_add_attachments\"><div ng-hide=\"ie8 &amp;&amp; EDIT_CASE_CONFIG.isPCM || ie9 &amp;&amp; EDIT_CASE_CONFIG.isPCM\" class=\"rha-bottom-border\"><div ng-hide=\"CaseService.submittingCase\" class=\"row\"><div class=\"col-xs-12\"><div ng-show=\"EDIT_CASE_CONFIG.showServerSideAttachments\"><div class=\"server-attach-header\">{{'Server File(s) To Attach:'|translate}}<div rha-choicetree=\"\" ng-model=\"attachmentTree\" ng-controller=\"BackEndAttachmentsCtrl\"></div></div></div></div></div></div></div></div><div class=\"col-xs-5\"><div class=\"pull-right\"><div ng-show=\"addingComment || addingattachment\" class=\"spinner spinner-inline\"></div><button id=\"rha-case-addcommentbutton\" ng-hide=\"addingComment || addingattachment\" ng-disabled=\"!ie8 &amp;&amp; !ie9 &amp;&amp; (CaseService.disableAddComment &amp;&amp; AttachmentsService.updatedAttachments.length === 0 &amp;&amp; !AttachmentsService.hasBackEndSelections())\" ng-click=\"addComment()\" translate=\"\" class=\"btn btn-app\">Post</button><a id=\"rha-case-addcommentbutton\" ng-click=\"clearComment()\" translate=\"\" ng-hide=\"addingComment || addingattachment\" class=\"margin-left\">Cancel</a></div></div></div><div class=\"row\"><div ng-show=\"ie8 &amp;&amp; EDIT_CASE_CONFIG.isPCM || ie9 &amp;&amp; EDIT_CASE_CONFIG.isPCM\" class=\"col-xs-12\"><form id=\"fileUploaderForm\" enctype=\"multipart/form-data\" method=\"post\" target=\"upload_target\"><div class=\"row\"><div class=\"col-xs-12\"><input id=\"fileUploader\" type=\"file\" value=\"upload\" name=\"file\"/></div></div><div class=\"row\"><div class=\"col-xs-12\"><input id=\"fileDescription\" style=\"float: left;\" type=\"text\" name=\"description\" ng-model=\"ieFileDescription\" placeholder=\"{{'File description'|translate}}\" class=\"form-control\"/></div></div></form><iframe id=\"upload_target\" name=\"upload_target\" style=\"width: 0; height: 0; border: 0px solid #fff;\"></iframe><button id=\"rha-case-addcommentbutton\" ng-click=\"submitIEAttachment()\" translate=\"\" class=\"btn btn-app\">Submit Attachment</button></div></div>");
}]);

angular.module("cases/views/attachLocalFile.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/attachLocalFile.html",
    "<div class=\"row\"><div class=\"col-xs-12\"><button ng-click=\"getFile()\" ng-disabled=\"disabled\" translate=\"\" ng-hide=\"AttachmentsService.updatedAttachments.length == 0\" class=\"btn btn-app\">Attach Another File</button><button ng-click=\"getFile()\" ng-disabled=\"disabled\" translate=\"\" ng-hide=\"AttachmentsService.updatedAttachments.length &gt; 0\" class=\"btn btn-app\">Attach File</button><div style=\"height: 0px; width:0px; overflow:hidden;\"><input id=\"fileUploader\" type=\"file\" value=\"upload\" rha-onchange=\"selectFile\" ng-model=\"file\" ng-disabled=\"disabled || CaseService.submittingCase\"/></div></div></div>");
}]);

angular.module("cases/views/attachProductLogs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/attachProductLogs.html",
    "<div class=\"container-fluid\"><div class=\"row rha-create-field\"><div class=\"col-xs-12\"><div style=\"padding-bottom: 4px;\">{{'Attach Foreman logs:'|translate}}</div><select multiple=\"multiple\" class=\"form-control\"><option>Log1</option><option>Log2</option><option>Log3</option><option>Log4</option><option>Log5</option><option>Log6</option></select></div></div><div class=\"row rha-create-field\"><div class=\"col-xs-12\"><button ng-disabled=\"true\" style=\"float: right;\" translate=\"\" class=\"btn\">Add</button></div></div></div>");
}]);

angular.module("cases/views/attachmentsSection.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/attachmentsSection.html",
    "<div ng-show=\"loading\" class=\"spinner spinner-inline\"></div><div rha-listattachments=\"\"></div><div ng-hide=\"loading || ie8 || ie9  &amp;&amp; isPCM\"><div ng-hide=\"AttachmentsService.updatedAttachments.length &lt;= 0 &amp;&amp; TreeViewSelectorUtils.getSelectedLeaves(AttachmentsService.backendAttachments).length &lt;= 0\"><div rha-listnewattachments=\"rha-listnewattachments\"></div><div ng-show=\"updatingAttachments\" class=\"spinner spinner-inline\"></div></div><button ng-hide=\"updatingAttachments\" ng-click=\"doUpdate()\" translate=\"\" class=\"btn btn-primary\">Upload Attachments</button><div rha-attachlocalfile=\"\"></div><div ng-show=\"showServerSideAttachments\"><div class=\"server-attach-header\">{{'Server File(s) To Attach:'|translate}}</div><div rha-choicetree=\"\" ng-model=\"attachmentTree\" ng-controller=\"BackEndAttachmentsCtrl\" rhaDisabled=\"rhaDisabled\"></div></div></div><form id=\"fileUploaderForm\" ng-show=\"!loading &amp;&amp; ie8 || ie9 &amp;&amp; isPCM\" enctype=\"multipart/form-data\" method=\"post\" target=\"upload_target\"><div class=\"row\"><div class=\"col-xs-6\">input(id='fileUploader', type='file', value='upload',name='file')</div><div class=\"col-xs-6\">{{fileName}}</div></div><div class=\"row\"><div style=\"font-size: 80%;\" class=\"col-xs-12\"><div ng-bind-html=\"parseArtifactHtml()\"></div></div></div><div class=\"row\"><div class=\"col-xs-12\"><input id=\"fileDescription\" style=\"float: left;\" type=\"text\" name=\"description\" ng-model=\"ieFileDescription\" placeholder=\"{{'File description'|translate}}\" class=\"form-control\"/></div></div><div class=\"row\"><div class=\"col-xs-12\"><button style=\"float: right;\" ng-click=\"ieUpload($event)\" translate=\"\" class=\"btn btn-add\">Upload Attachments</button></div></div><iframe id=\"upload_target\" name=\"upload_target\"></iframe></form>");
}]);

angular.module("cases/views/commonConfirmationModal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/commonConfirmationModal.html",
    "<div class=\"modal-header\"><h3>{{CaseService.confirmationModalHeader}}</h3></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-sm-12\"><div>{{CaseService.confirmationModalMessage}}</div></div></div><div style=\"border-top: 1px; solid #cccccc; padding-top: 10px;\" class=\"row\"><div class=\"col-sm-12\"><div class=\"pull-right\"><button style=\"margin-left: 10px;\" ng-click=\"confirm()\" class=\"btn btn-app\"><span>{{'Yes'|translate}}</span></button><button style=\"margin-left: 10px;\" ng-click=\"closeModal()\" class=\"btn btn-app\"><span>{{'No'|translate}}</span></button></div></div></div></div>");
}]);

angular.module("cases/views/compact.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/compact.html",
    "<div class=\"container-offset\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <div rha-header page=\"caseList\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-4\" style=\"height: 100%;\">\n" +
    "                <div rha-compactcaselist></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-8\" style=\"padding: 0px; \">\n" +
    "                <!-- Jade can't create the ui-view attribute in the form\n" +
    "                     angular ui router requires (see next line).-->\n" +
    "                <div ui-view autoscroll=\"false\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("cases/views/createGroupButton.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/createGroupButton.html",
    "<button ng-click=\"openCreateGroupDialog()\" translate=\"\" class=\"btn btn-primary btn-slim btn-small\">Create New Case Group</button>");
}]);

angular.module("cases/views/createGroupModal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/createGroupModal.html",
    "<div id=\"rha-create-group-modal\"><div class=\"modal-header\"><h3 translate=\"\">Create Case Group</h3></div><div style=\"padding: 20px;\" class=\"container-fluid\"><div style=\"padding-bottom: 20px;\" class=\"row\"><div class=\"col-sm-12\"><div style=\"display: table; width: 100%;\"><label style=\"display: table-cell\" translate=\"\">Case Group:</label><input id=\"rha-case-groupName\" ng-model=\"groupName\" style=\"display: table-cell; width: 100%;\" ng-keypress=\"onGroupNameKeyPress($event)\" auto-focus=\"\" class=\"form-control\"/></div></div></div><div class=\"row\"><div class=\"col-sm-12\"><button ng-click=\"createGroup()\" style=\"margin-left: 10px;\" translate=\"\" class=\"btn-primary btn pull-right\">Save</button><button ng-click=\"closeModal()\" translate=\"\" class=\"btn-secondary btn pull-right\">Cancel</button></div></div></div></div>");
}]);

angular.module("cases/views/defaultGroup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/defaultGroup.html",
    "<div id=\"redhat-access-case\" class=\"container-offset\"><div rha-header=\"\" page=\"defaultGroup\"></div><div ng-show=\"!userCanManageDefaultGroups\">{{'User does not have permissions to set default case group.'|translate}}</div><div ng-show=\"userCanManageDefaultGroups\" class=\"rha-side-padding\"><div style=\"padding-bottom: 20px;\" class=\"row\"><div style=\"padding-bottom: 20px;\" class=\"col-xs-12\"><div class=\"col-xs-2\"><label>{{'Case Group Name:'|translate}}</label></div><div class=\"col-xs-9\"><select id=\"rha-defaultgroup-groupselect\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || groupsLoading\" ng-model=\"selectedGroup\" ng-change=\"defaultGroupChanged()\" ng-options=\"group as group.name for group in groups\" class=\"form-control\"></select></div><div class=\"col-xs-1\"><div style=\"width: 100%\"><span ng-show=\"groupsLoading\" class=\"rha-search-spinner\"></span></div></div></div><div style=\"padding-bottom: 20px;\" class=\"col-xs-12\"><div class=\"col-xs-2\"><label>{{'Group Users:'|translate}}</label></div><div class=\"col-xs-9\"><select id=\"rha-defaultgroup-userselect\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || !usersLoaded\" ng-model=\"selectedUser\" ng-change=\"validatePage()\" ng-options=\"user.sso_username for user in usersOnAccount\" class=\"form-control\"></select></div><div class=\"col-xs-1\"><div style=\"width: 100%\"><span ng-show=\"usersLoading\" class=\"rha-search-spinner\"></span></div></div></div><div style=\"padding-bottom: 20px;\" class=\"col-xs-12\"><div style=\"padding-bottom: 20px;\" class=\"row\"></div><button ng-click=\"setDefaultGroup()\" ng-disabled=\"!usersAndGroupsFinishedLoading\" translate=\"\" class=\"btn btn-primary\">Save Group</button><div class=\"divider\"></div><button ng-click=\"back()\" translate=\"\" class=\"btn btn-primary\">Back</button></div></div></div></div>");
}]);

angular.module("cases/views/deleteGroupButton.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/deleteGroupButton.html",
    "<button ng-click=\"deleteGroups()\" ng-disabled=\"GroupService.disableDeleteGroup\" translate=\"\" class=\"btn btn-secondary btn-slim btn-small\">Delete Group</button>");
}]);

angular.module("cases/views/descriptionSection.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/descriptionSection.html",
    "<section class=\"filters\"><div class=\"row\"><div class=\"col-sm-4\"><select id=\"rha-status-select\" chosen=\"chosen\" width=\"'100%'\" name=\"status\" ng-model=\"CaseService.kase.status\" ng-change=\"updateCase()\" ng-options=\"s.name for s in CaseService.statuses track by s.name\"></select></div><div class=\"col-sm-4\"><select id=\"rha-severity-select\" chosen=\"chosen\" width=\"'100%'\" name=\"severity\" ng-model=\"CaseService.kase.severity\" ng-change=\"CaseService.onChangeFTSCheck();updateSeverity()\" ng-options=\"s.name for s in CaseService.severities track by s.name\"></select><!--span.glyphicon.glyphicon-question-sign(tooltip-html-unsafe='{{\"Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.\" |translate }}<br></br><a href=\\'/support/offerings/production/sla.html\\' target=\\'_blank\\'>{{\"View Production Support Service Level Agreement\"|translate}}</a>',tabindex='0',tooltip-trigger=\"focus\")--></div></div></section>");
}]);

angular.module("cases/views/detailsSection.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/detailsSection.html",
    "<section class=\"case-description\"><i id=\"case-description-toggle\" ng-click=\"toggleExtraInfo()\" ng-class=\"showExtraInfo ? 'fa fa-chevron-down case-description-toggle active' : 'fa fa-chevron-down case-description-toggle'\" class=\"fa fa-caret-chevron case-description-toggle\"></i><h3 class=\"case-name pre-wrap\"><a ng-click=\"editCaseSummary(true)\" ng-show=\"!caseSummaryEditable\" href=\"\">{{CaseService.kase.summary}}</a></h3><form name=\"summaryForm\"><div ng-show=\"caseSummaryEditable\" class=\"row\"><div class=\"col-xs-4 col-sm-3 col-md-8\"><input id=\"rha-case-summary\" ng-model=\"CaseService.kase.summary\" maxlength=\"255\" name=\"case_summary\" class=\"form-control\"/></div><div class=\"col-xs-4 col-sm-3 col-md-4\"><button name=\"saveButton\" ng-disabled=\"updatingDetails || !summaryForm.$dirty\" ng-click=\"updateCase()\" translate=\"\" class=\"btn btn-primary\">Save</button><a ng-hide=\"updatingDetails\" ng-click=\"editCaseSummary(false)\" class=\"margin-left\">{{'Cancel'|translate}}</a></div></div></form><h4 class=\"product-name\">{{CaseService.kase.product}}&nbsp;{{CaseService.kase.version}}</h4><span ng-hide=\"showExtraInfo\" class=\"description toggled-content pre-wrap\">{{CaseService.kase.description | substring:150 }}</span><span ng-show=\"showExtraInfo\" class=\"description pre-wrap\">{{CaseService.kase.description}}</span><div id=\"case-description-extra-info\" ng-class=\"showExtraInfo ? 'case-description-extra-info active' : 'case-description-extra-info'\"><form name=\"detailsForm\"><section class=\"config-options\"><div class=\"row row-short\"><div class=\"col-xs-4 col-sm-3 col-md-4\"><div class=\"label\">{{'Product'|translate}}</div></div><div class=\"col-xs-4 col-sm-5 col-md-6\"><div rha-productselect=\"\"></div></div></div><div class=\"row row-short\"><div class=\"col-xs-4 col-sm-3 col-md-4\"><div class=\"label\">{{'Product Version'|translate}}</div></div><div class=\"col-xs-4 col-sm-5 col-md-6\"><div rha-versionselect=\"\"></div></div></div><div class=\"row row-short\"><div class=\"col-xs-4 col-sm-3 col-md-4\"><div class=\"label\">{{'Alternate Case ID'|translate}}</div></div><div class=\"col-xs-4 col-sm-5 col-md-6\"><input id=\"rha-case-alt-id\" ng-model=\"CaseService.kase.alternate_id\" name=\"alternate_id\" class=\"form-control\"/></div></div><div class=\"row row-short\"><div class=\"col-xs-4 col-sm-3 col-md-4\"><div class=\"label\">{{'Case Group'|translate}}</div></div><div class=\"col-xs-4 col-sm-5 col-md-6\"><select id=\"rha-group-select\" chosen=\"chosen\" width=\"'100%'\" name=\"group\" ng-options=\"g.name for g in groups track by g.number\" ng-model=\"CaseService.kase.group\" class=\"form-control\"></select></div></div><div class=\"row row-short\"><div class=\"col-xs-4 col-sm-3 col-md-4\"><div class=\"label\">{{'Case Type'|translate}}</div></div><div class=\"col-xs-4 col-sm-5 col-md-6\"><div rha-typeselect=\"\"></div></div></div><div ng-show=\"CaseService.showFts()\" class=\"row row-short\"><div class=\"col-xs-4 col-sm-3 col-md-4\"><div class=\"label\">{{'24x7 Support'|translate}}</div></div><div class=\"col-xs-4 col-sm-5 col-md-6\"><input ng-model=\"CaseService.kase.fts\" type=\"checkbox\" name=\"ftsCheckbox\"/></div></div><div ng-show=\"CaseService.showFts() &amp;&amp; CaseService.kase.fts\" class=\"row row-short\"><div class=\"col-xs-4 col-sm-3 col-md-4\"><div class=\"label\">{{'24x7 Contact'|translate}}</div></div><div class=\"col-xs-4 col-sm-5 col-md-6\"><input ng-model=\"CaseService.kase.contact_info24_x7\"/></div></div><div class=\"row\"><div class=\"col-sm-12\"><button name=\"updateButton\" ng-disabled=\"validatePage() || updatingDetails || !detailsForm.$dirty\" ng-click=\"updateCase()\" translate=\"\" class=\"btn btn-app btn-submit\">Save Changes</button><a ng-hide=\"updatingDetails || !detailsForm.$dirty\" ng-click=\"resetData()\" translate=\"\" class=\"margin-left\">Cancel</a></div></div></section></form></div></section>");
}]);

angular.module("cases/views/discussionSection.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/discussionSection.html",
    "<ul id=\"tab_list\" role=\"tablist\" class=\"nav nav-tabs\"><li ng-class=\"{&quot;active&quot;: discussion}\"><a ng-click=\"toggleDiscussion()\" data-toggle=\"tab\">{{'Case Discussion'|translate}}</a></li><li ng-class=\"{&quot;active&quot;: attachments}\"><a ng-click=\"toggleAttachments()\" data-toggle=\"tab\" ng-hide=\"DiscussionService.attachments.length === 0\">{{'All Attachments'|translate}}</a></li><li ng-class=\"{&quot;active&quot;: notes}\" ng-hide=\"securityService.loginStatus.authedUser.is_internal\"><a ng-click=\"toggleNotes()\" data-toggle=\"tab\">{{'Private Notes'|translate}}</a></li><li ng-class=\"{&quot;active&quot;: bugzillas}\" ng-show=\"securityService.loginStatus.authedUser.is_internal || CaseService.kase.bugzillas.bugzilla.length &gt; 0\"><a ng-click=\"toggleBugzillas()\" data-toggle=\"tab\">{{'Bugzilla Tickets'|translate}}</a></li></ul><div class=\"tab-content\"><div id=\"pane1\" ng-class=\"{&quot;active&quot;: discussion}\" class=\"tab-pane\"><div class=\"row\"><div class=\"col-xs-12\"><!-- Add Comment Section--><div rha-addcommentsection=\"\" loading=\"loading.comments\"></div></div></div><div ng-hide=\"DiscussionService.discussionElements.length===0\" class=\"row\"><div class=\"col-sm-7\"><label>{{'Sort by'|translate}}&nbsp;&nbsp;</label><select id=\"rha-comment-sort\" chosen=\"chosen\" width=\"&quot;auto&quot;\" ng-init=\"DiscussionService.commentSortOrder = commentSortOrderList[0]\" ng-model=\"DiscussionService.commentSortOrder\" ng-change=\"onSortOrderChange()\" ng-options=\"commentOrder as commentOrder.name for commentOrder in commentSortOrderList\"></select></div></div><div class=\"row\"><div class=\"col-xs-12\"><article id=\"{{element.id}}\" ng-repeat=\"element in DiscussionService.discussionElements | orderBy:'sortModifiedDate':commentSortOrder\" ng-if=\"!element.draft\" class=\"comment\"><div class=\"row\"><div class=\"col-sm-4\"><h4 ng-if=\"element.comment_type === 'chat'\" class=\"meta\"><span>{{'Transcript of chat between'|translate}}</span><div class=\"author blue\">{{element.agent_name}}</div><span>{{'and'|translate}}</span><div class=\"author blue\">{{element.visitor_name}}</div><date class=\"light\">{{element.last_modified_date}} &nbsp;</date><span class=\"light\">{{'at'|translate}} &nbsp;</span><time class=\"light\">{{element.last_modified_time}}</time></h4><h4 ng-if=\"element.comment_type !== 'chat'\" class=\"meta\"><div class=\"author blue\">{{element.created_by}}</div><date class=\"light\">{{element.created_date}} &nbsp;</date><span class=\"light\">{{'at'|translate}} &nbsp;</span><time class=\"light\">{{element.created_time}}</time><div ng-if=\"element.public !== undefined &amp;&amp; element.public === false\" class=\"private\">{{'Private'|translate}}</div></h4></div><div class=\"col-sm-8\"><blockquote ng-if=\"element.comment_type === 'chat'\" ng-bind-html=\"parseCommentHtml(element)\" class=\"dialog-box pre-wrap\"></blockquote><blockquote ng-hide=\"element.file_name || element.comment_type === 'chat'\" class=\"dialog-box pre-wrap\"><span ng-if=\"ie8 || ie9\" style=\"word-wrap: normal; word-break: normal;\">{{element.text}}</span><span ng-if=\"!ie8 &amp;&amp; !ie9\" ng-bind-html=\"parseCommentHtml(element)\"></span><a ng-hide=\"element.file_name\" ng-click=\"CaseService.scrollToComment(element.id)\" ng-href=\"#/case/{{CaseService.kase.case_number}}?commentId={{element.id}}\" class=\"glyphicon glyphicon-link pull-right\"></a><a ng-click=\"commentReply(element,(ie8 || ie9))\" href=\"\" class=\"pull-right commentReply\">{{'Reply'|translate}} &nbsp;</a></blockquote><div ng-show=\"element.file_name\" class=\"dialog-box\"><a href=\"{{element.uri}}\"><div class=\"fa fa-file-image-o file-upload\"></div><span>{{element.file_name}} ({{element.length | bytes}})</span></a><div type=\"button\" style=\"cursor: pointer;\" ng-click=\"deleteAttachment(element)\" class=\"fa fa-close pull-right\"></div><div ng-show=\"element.description\" class=\"description margin-top-short\">{{element.description}}</div></div></div></div></article></div></div></div><div id=\"pane2\" ng-class=\"{&quot;active&quot;: attachments}\" class=\"tab-pane\"><article id=\"{{attachment.id}}\" ng-repeat=\"attachment in DiscussionService.attachments | orderBy:'sortModifiedDate':'reverse'\" class=\"row\"><div class=\"col-sm-4\"><h4 class=\"meta\"><div class=\"author blue\">{{attachment.created_by}}</div><date class=\"light\">{{attachment.created_date}}</date><span class=\"light\"> at &nbsp;</span><time class=\"light\">{{attachment.created_time}}</time></h4></div><div class=\"col-sm-8\"><div class=\"dialog-box\"><a href=\"{{attachment.uri}}\"><div class=\"fa fa-file-image-o file-upload\"></div><span>{{attachment.file_name}} ({{attachment.length | bytes}})</span></a><div type=\"button\" style=\"float: right; cursor: pointer;\" ng-click=\"deleteAttachment(attachment)\" class=\"fa fa-close pull-right\"></div><div ng-show=\"attachment.description\" class=\"description margin-top-short\">{{attachment.description}}</div></div></div></article></div><div id=\"pane3\" ng-hide=\"securityService.loginStatus.authedUser.is_internal\" ng-class=\"{&quot;active&quot;: notes}\" class=\"tab-pane\"><form name=\"notesForm\"><div><label for=\"rha-case-notes\">{{'Notes:'|translate}}</label></div><div><span id=\"notesTooltip\" class=\"uploadNotice\"><span>{{\"Please note, contents of this field are not visible to Red Hat Support professionals.\"|translate}}</span></span></div><div class=\"row\"><div class=\"col-xs-12\"><textarea id=\"rha-case-notes\" style=\"width: 100%; height: 70px; max-width: 100%;\" ng-model=\"CaseService.kase.notes\" maxlength=\"255\" name=\"notes\"></textarea></div></div><div class=\"row row-short\"><div class=\"col-sm-7\"><span id=\"notesNotice\" class=\"uploadNotice\"><span translate=\"translate\" class=\"progressCount\">{{noteCharactersLeft}} characters left.</span></span></div><div class=\"col-sm-5\"><div class=\"pull-right\"><button ng-click=\"updateNotes()\" ng-disabled=\"CaseService.updatingCase || !notesForm.$dirty\" translate=\"\" class=\"btn btn-app\">Update</button><a ng-click=\"discardNotes()\" ng-disabled=\"CaseService.updatingCase || !notesForm.$dirty\" class=\"margin-left\">{{'Discard Changes'|translate}}</a></div></div></div></form></div><div id=\"pane4\" ng-if=\"securityService.loginStatus.authedUser.is_internal || CaseService.kase.bugzillas.bugzilla.length &gt; 0\" ng-class=\"{&quot;active&quot;: bugzillas}\" class=\"tab-pane\"><div rha-listbugzillas=\"rha-listbugzillas\"></div></div></div>");
}]);

angular.module("cases/views/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/edit.html",
    "<div rha-header=\"\" page=\"\" class=\"page-header\"></div><div ng-show=\"securityService.loginStatus.isLoggedIn &amp;&amp; !HeaderService.pageLoadFailure &amp;&amp; CaseService.sfdcIsHealthy &amp;&amp; securityService.loginStatus.userAllowedToManageCases\"><div class=\"row\"><div class=\"section main col-md-8\"><h1 translate=\"translate\" class=\"page-title\">CASE {{CaseService.kase.case_number}}</h1><div><span translate=\"translate\"> Filed on {{CaseService.kase.created_date}} by {{CaseService.kase.contact_name}}</span><span class=\"sep\">|</span>{{'Assigned to'|translate}} {{CaseService.kase.owner}}</div><div ng-if=\"securityService.loginStatus.authedUser.is_internal\"><span translate=\"translate\">Account number : {{securityService.loginStatus.account.number}}</span>&nbsp;&nbsp;&nbsp;<span translate=\"translate\">Account name : {{securityService.loginStatus.account.name}}</span></div><a href=\"/support/offerings/production/sla.html\" target=\"_blank\">{{CaseService.kase.entitlement.sla}} {{'Support Level'|translate}}      </a><div style=\"margin-top:15px;\" ng-show=\"EDIT_CASE_CONFIG.showDescription\"><div rha-casedescription=\"\" loading=\"loading.kase\"></div></div><div ng-show=\"EDIT_CASE_CONFIG.showDetails\"><div rha-casedetails=\"\" compact=\"false\" loading=\"loading.kase\"><rha-casedetails></rha-casedetails></div></div><section class=\"case-discussion\"><div class=\"row\"><div rha-emailnotifyselect=\"\" class=\"col-xs-12\"></div></div><div class=\"row\"><div class=\"col-xs-12\"><div rha-casediscussion=\"\" loading=\"loading.comments\"></div></div></div></section></div><div class=\"aside col-md-4\"><div ng-show=\"RecommendationsService.loadingRecommendations\" class=\"spinner spinner-inline\"></div><div id=\"rha-recommendation-section\" rha-editcaserecommendations=\"\" ng-hide=\"RecommendationsService.loadingRecommendations\" class=\"recommendations aside-section\"></div><div id=\"case-escalation\" rha-requestescalation=\"\" class=\"section case-escalation aside-section\"></div></div></div></div>");
}]);

angular.module("cases/views/editCaseRecommendationsSection.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/editCaseRecommendationsSection.html",
    "<accordion><accordion-group ng-hide=\"RecommendationsService.handPickedRecommendations.length === 0;\" is-open=\"isHandpickedSolutionsOpen.val\"><accordion-heading><i ng-class=\"{&quot;active&quot;: isHandpickedSolutionsOpen.val}\" class=\"fa fa-chevron-down\"></i>{{'Handpicked For You'|translate}}</accordion-heading><ul><li ng-repeat=\"recommendation in handPickedResults.array\" class=\"recommendation\"><div class=\"title\"><div ng-class=\"{&quot;fa-thumb-tack pinned&quot;: recommendation.pinned &amp;&amp; !recommendation.pinning, &quot;fa-thumb-tack not-pinned&quot;: !recommendation.pinned &amp;&amp; !recommendation.pinning, &quot;spinner spinner-xs&quot;: recommendation.pinning}\" ng-click=\"pinRecommendation(recommendation, $index, $event)\" style=\"cursor: pointer;\" class=\"fa pin\">&nbsp;</div><a ng-click=\"triggerAnalytics($event)\" href=\"{{recommendation.resource_view_uri}}\" target=\"_blank\"><strong>{{recommendation.title | substring:100 }}</strong></a></div><div ng-bind-html=\"recommendation.abstract\" class=\"pre-wrap\"></div></li></ul><div ng-show=\"RecommendationsService.handPickedRecommendations.length &gt; itemsPerPage\" class=\"pagination\"><div class=\"pull-right\"><button ng-disabled=\"handPickedResultsPage === 1\" ng-click=\"decrement('handPickedResultsPage');selectPage(handPickedResultsPage, RecommendationsService.handPickedRecommendations, handPickedResults)\" class=\"btn btn-app\">{{'BACK'|translate}}</button><button ng-disabled=\"handPickedResultsPage &gt;= findLastPage(RecommendationsService.handPickedRecommendations)\" ng-click=\"increment('handPickedResultsPage');selectPage(handPickedResultsPage, RecommendationsService.handPickedRecommendations, handPickedResults)\" class=\"btn btn-app\">{{'NEXT'|translate}}</button></div></div></accordion-group><accordion-group ng-hide=\"RecommendationsService.recommendations.length === 0\" is-open=\"isTopSolutionsOpen.val\"><accordion-heading><i ng-class=\"{&quot;active&quot;: isTopSolutionsOpen.val}\" class=\"fa fa-chevron-down\"></i>{{'Top Solutions'|translate}}</accordion-heading><ul><li ng-repeat=\"recommendation in results.array\" class=\"recommendation\"><div class=\"title\"><div ng-class=\"{&quot;fa-thumb-tack pinned&quot;: recommendation.pinned &amp;&amp; !recommendation.pinning, &quot;fa-thumb-tack not-pinned&quot;: !recommendation.pinned &amp;&amp; !recommendation.pinning, &quot;spinner spinner-xs&quot;: recommendation.pinning}\" ng-click=\"pinRecommendation(recommendation, $index, $event)\" style=\"cursor: pointer;\" class=\"fa pin\">&nbsp;</div><a ng-click=\"triggerAnalytics($event)\" href=\"{{recommendation.resource_view_uri}}\" target=\"_blank\"><strong>{{recommendation.title}}</strong></a></div><div ng-bind-html=\"recommendation.abstract\" class=\"pre-wrap\"></div></li></ul><div ng-show=\"RecommendationsService.recommendations.length &gt; itemsPerPage\" class=\"pagination\"><div class=\"pull-right\"><button ng-disabled=\"resultsPage === 1\" ng-click=\"decrement('resultsPage');selectPage(resultsPage, RecommendationsService.recommendations, results)\" class=\"btn btn-app\">{{'BACK'|translate}}</button><button ng-disabled=\"resultsPage &gt;= findLastPage(RecommendationsService.recommendations)\" ng-click=\"increment('resultsPage');selectPage(resultsPage, RecommendationsService.recommendations, results)\" class=\"btn btn-app\">{{'NEXT'|translate}}</button></div></div></accordion-group><accordion-group ng-hide=\"RecommendationsService.pinnedRecommendations.length === 0\" is-open=\"isPinnedSolutionsOpen.val\"><accordion-heading><i ng-class=\"{&quot;active&quot;: isPinnedSolutionsOpen.val}\" class=\"fa fa-chevron-down\"></i>{{'Your Pins'|translate}}</accordion-heading><ul><li ng-repeat=\"recommendation in pinnedResults.array\" class=\"recommendation\"><div class=\"title\"><div ng-class=\"{&quot;fa-thumb-tack pinned&quot;: recommendation.pinned &amp;&amp; !recommendation.pinning, &quot;fa-thumb-tack not-pinned&quot;: !recommendation.pinned &amp;&amp; !recommendation.pinning, &quot;spinner spinner-xs&quot;: recommendation.pinning}\" ng-click=\"pinRecommendation(recommendation, $index, $event)\" style=\"cursor: pointer;\" class=\"fa pin\">&nbsp;</div><a ng-click=\"triggerAnalytics($event)\" href=\"{{recommendation.resource_view_uri}}\" target=\"_blank\"><strong>{{recommendation.title}}</strong></a></div><div ng-bind-html=\"recommendation.abstract\" class=\"pre-wrap\"></div></li></ul><div ng-show=\"RecommendationsService.pinnedRecommendations.length &gt; itemsPerPage\" class=\"pagination\"><div class=\"pull-right\"><button ng-disabled=\"pinnedResultsPage === 1\" ng-click=\"decrement('pinnedResultsPage');selectPage(pinnedResultsPage, RecommendationsService.pinnedRecommendations, pinnedResults)\" class=\"btn btn-app\">{{'BACK'|translate}}</button><button ng-disabled=\"pinnedResultsPage &gt;= findLastPage(RecommendationsService.pinnedRecommendations)\" ng-click=\"increment('pinnedResultsPage');selectPage(pinnedResultsPage, RecommendationsService.pinnedRecommendations, pinnedResults)\" class=\"btn btn-app\">{{'NEXT'|translate}}</button></div></div></accordion-group></accordion>");
}]);

angular.module("cases/views/editGroup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/editGroup.html",
    "<div id=\"redhat-access-case\" class=\"container-offset\"><div rha-header=\"\" page=\"editGroup\" ng-controller=\"EditGroup\"></div><div ng-show=\"CaseService.sfdcIsHealthy\" class=\"container-fluid rha-side-padding\"><div style=\"padding-bottom: 20px;\" class=\"row\"><div style=\"padding-bottom: 20px;\" class=\"container-fluid\"><div class=\"col-xs-1\"><label>{{'Group Name:'|translate}}</label></div><div class=\"col-xs-6\"><input type=\"text\" ng-model=\"selectedGroup.name\" ng-change=\"toggleGroupPrestine()\" class=\"form-control\"/></div></div><span ng-show=\"usersLoading\" class=\"rha-search-spinner\"></span><div ng-hide=\"usersLoading\"><div style=\"padding-bottom: 20px;\" class=\"row\"></div><div class=\"col-xs-6\"><div rha-searchbox=\"\" placeholder=\"&quot;Filter Users&quot;\" hidebutton=\"true\"></div></div><div style=\"padding-bottom: 20px;\" class=\"row\"></div><div class=\"col-xs-12\"><table ng-table=\"tableParams\" class=\"table table-bordered table-striped\"><thead style=\"text-align: center\"><th><label>{{'Read Access'|translate}}</label><input type=\"checkbox\" style=\"width: 25px;\" ng-model=\"masterReadSelected\" ng-change=\"onMasterReadCheckboxClicked(masterReadSelected)\"/></th><th><label>{{'Write Access'|translate}}</label><input type=\"checkbox\" style=\"width: 25px;\" ng-model=\"masterWriteSelected\" ng-change=\"onMasterWriteCheckboxClicked(masterWriteSelected)\"/></th><th ng-class=\"{&quot;sort-asc&quot;: table-params.isSortBy(&quot;sso_username&quot;, &quot;asc&quot;), &quot;sort-desc&quot;: tableParams.isSortBy(&quot;sso_username&quot;, &quot;desc&quot;)}\" ng-click=\"tableParams.sorting({&quot;sso_username&quot;: tableParams.isSortBy(&quot;sso_username&quot;, &quot;asc&quot;) ? &quot;desc&quot; : &quot;asc&quot;})\" class=\"sortable\"><div>{{'User Name'|translate}}</div></th><th ng-class=\"{&quot;sort-asc&quot;: table-params.isSortBy(&quot;first_name&quot;, &quot;asc&quot;), &quot;sort-desc&quot;: tableParams.isSortBy(&quot;first_name&quot;, &quot;desc&quot;)}\" ng-click=\"tableParams.sorting({&quot;first_name&quot;: tableParams.isSortBy(&quot;first_name&quot;, &quot;asc&quot;) ? &quot;desc&quot; : &quot;asc&quot;})\" class=\"sortable\"><div>{{'First Name'|translate}}</div></th><th ng-class=\"{&quot;sort-asc&quot;: table-params.isSortBy(&quot;last_name&quot;, &quot;asc&quot;), &quot;sort-desc&quot;: tableParams.isSortBy(&quot;last_name&quot;, &quot;desc&quot;)}\" ng-click=\"tableParams.sorting({&quot;last_name&quot;: tableParams.isSortBy(&quot;last_name&quot;, &quot;asc&quot;) ? &quot;desc&quot; : &quot;asc&quot;})\" class=\"sortable\"><div>{{'Last Name'|translate}}</div></th></thead><tbody><tr ng-repeat=\"user in usersOnScreen\"><td style=\"text-align: center; width: 25px;\"><input type=\"checkbox\" ng-disabled=\"user.write || user.org_admin\" ng-model=\"user.access\" ng-change=\"toggleUsersPrestine()\"/></td><td style=\"text-align: center; width: 25px;\"><input type=\"checkbox\" ng-disabled=\"user.org_admin\" ng-model=\"user.write\" ng-change=\"writeAccessToggle(user)\"/></td><td data-title=\"&quot;user.sso_username&quot;\" sortable=\"&quot;sso_username&quot;\">{{user.sso_username}}</td><td data-title=\"&quot;user.first_name&quot;\" sortable=\"&quot;first_name&quot;\">{{user.first_name}}</td><td data-title=\"&quot;lastName&quot;\" sortable=\"&quot;last_name&quot;\">{{user.last_name}}</td></tr></tbody></table><button ng-click=\"saveGroup()\" ng-disabled=\"isGroupPrestine &amp;&amp; isUsersPrestine\" translate=\"\" class=\"btn btn-primary\">Save Group</button><button ng-click=\"cancel()\" translate=\"\" class=\"btn btn-primary\">Cancel</button></div></div></div></div></div>");
}]);

angular.module("cases/views/emailNotifySelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/emailNotifySelect.html",
    "<div ng-show=\"!securityService.loginStatus.isLoggedIn  || CaseService.usersLoading || securityService.loggingIn\" class=\"spinner spinner-inline\"></div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"label\">{{'Send Email Notifications to'|translate}}</div></div><div class=\"col-sm-8\"><select chosen=\"chosen\" multiple=\"multiple\" data-placeholder=\"{{'Select a User'|translate}}\" ng-disabled=\"updatingList\" ng-model=\"CaseService.updatedNotifiedUsers\" ng-change=\"updateNotifyUsers()\" id=\"rha-email-notify-select\" width=\"&quot;100%&quot;\" ng-options=\"user.sso_username as user.sso_username for user in CaseService.users\"></select></div></div>");
}]);

angular.module("cases/views/entitlementSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/entitlementSelect.html",
    "<div rha-selectloadingindicator=\"\" loading=\"CaseService.entitlementsLoading\" type=\"select2\"><select id=\"rha-entitlement-select\" ng-disabled=\"!securityService.loginStatus.isLoggedIn\" ng-model=\"CaseService.entitlement\" ng-change=\"CaseService.onChangeFTSCheck()\" width=\"&quot;100%&quot;\" ng-options=\"entitlement as entitlement for entitlement in CaseService.entitlements\"></select></div>");
}]);

angular.module("cases/views/exportCSVButton.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/exportCSVButton.html",
    "<a ng-click=\"exports()\" ng-hide=\"exporting || ie8 || ie9\" translate=\"\" class=\"btn btn-blue btn-sm btn-slim\">Export</a><div ng-show=\"exporting\"><span class=\"rha-search-spinner\"></span><span>{{'Exporting CSV...'|translate}}</span></div>");
}]);

angular.module("cases/views/filterSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/filterSelect.html",
    "<label>{{'Sort by'|translate}}</label><select id=\"rha-filter-select\" chosen=\"chosen\" width=\"&quot;auto&quot;\" ng-init=\"init()\" ng-disabled=\"!securityService.loginStatus.isLoggedIn\" ng-model=\"CaseService.filterSelect\" ng-change=\"CaseService.onFilterSelectChanged()\" ng-options=\"sort as sort.name for sort in ConstantsService.sortByParams\" disable_search_threshold=\"10\"></select>");
}]);

angular.module("cases/views/group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/group.html",
    "<div id=\"redhat-access-case\" ng-show=\"!securityService.loginStatus.userAllowedToManageCases\" class=\"container-offset\"><div rha-403error=\"\"></div></div><div id=\"redhat-access-case\" ng-hide=\"!securityService.loginStatus.userAllowedToManageCases\" class=\"container-offset\"><div rha-header=\"\" page=\"manageGroups\"></div><div ng-hide=\"!CaseService.sfdcIsHealthy\" class=\"container-fluid rha-side-padding\"><div style=\"padding-bottom: 20px;\" class=\"row\"><div class=\"col-xs-4\"><div rha-searchbox=\"\" placeholder=\"&quot;Search Groups&quot;\"></div></div><div class=\"col-xs-8\"><div rha-creategroupbutton=\"\" class=\"pull-right\"></div><div rha-deletegroupbutton=\"\" style=\"padding-right: 20px;\" class=\"pull-right\"></div><div style=\"padding-right: 20px;\" class=\"pull-right\"><button type=\"button\" translate=\"\" ng-show=\"securityService.loginStatus.authedUser.org_admin\" ng-click=\"defaultCaseGroup()\" class=\"btn btn-primary btn-slim btn-small\">Manage Default Case Groups</button></div></div></div><div class=\"row\"><div class=\"col-xs-12\"><div rha-grouplist=\"\"></div></div></div></div></div>");
}]);

angular.module("cases/views/groupList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/groupList.html",
    "<span ng-show=\"groupsLoading\" class=\"rha-search-spinner\"></span><div ng-show=\"!groupsLoading &amp;&amp; listEmpty\">{{'No groups found.'|translate}}</div><div ng-hide=\"groupsLoading || listEmpty\"><table ng-table=\"tableParams\" class=\"table table-bordered table-striped\"><thead style=\"text-align: center\"><th><input type=\"checkbox\" style=\"width: 25px;\" ng-model=\"masterSelected\" ng-change=\"onMasterCheckboxClicked()\"/></th><th ng-class=\"{&quot;sort-asc&quot;: table-params.isSortBy(&quot;name&quot;, &quot;asc&quot;), &quot;sort-desc&quot;: tableParams.isSortBy(&quot;name&quot;, &quot;desc&quot;)}\" ng-click=\"tableParams.sorting({&quot;name&quot;: tableParams.isSortBy(&quot;name&quot;, &quot;asc&quot;) ? &quot;desc&quot; : &quot;asc&quot;})\" class=\"sortable\"><div>{{'Name'|translate}}</div></th></thead><tbody><tr ng-repeat=\"group in GroupService.groupsOnScreen\"><td style=\"text-align: center; width: 25px;\"><input type=\"checkbox\" ng-model=\"group.selected\" ng-change=\"onGroupSelected()\"/></td><td data-title=\"&quot;Group Name&quot;\" sortable=\"&quot;name&quot;\"><a ng-show=\"canManageGroups\" ng-href=\"#/case/group/{{group.number}}\">{{group.name}}</a><p ng-hide=\"canManageGroups\">{{group.name}}</p></td></tr></tbody></table></div>");
}]);

angular.module("cases/views/groupSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/groupSelect.html",
    "<div><select id=\"rha-group-select\" chosen=\"chosen\" width=\"&quot;100%&quot;\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-model=\"CaseService.group\" ng-change=\"CaseService.onGroupSelectChanged()\" placeholder=\"Select a Group\" ng-options=\"option.value as option.label for option in CaseService.groupOptions\" options-disabled=\"option.isDisabled for option in CaseService.groupOptions\"></select></div>");
}]);

angular.module("cases/views/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/list.html",
    "<div rha-header=\"\" page=\"caseList\"></div><div ng-show=\"securityService.loginStatus.isLoggedIn &amp;&amp; !HeaderService.pageLoadFailure &amp;&amp; CaseService.sfdcIsHealthy &amp;&amp; securityService.loginStatus.userAllowedToManageCases\" class=\"page-header\"><div ng-hide=\"!CaseService.sfdcIsHealthy\" class=\"row\"><div rha-listfilter=\"\" class=\"col-sm-8\"></div><div class=\"col-sm-4\"><div class=\"actions\"><div class=\"row\"><div class=\"col-xs-12\"><a href=\"#/case/new\" class=\"btn btn-app btn-sm new-case-btn\"><span id=\"rha-new-case-btn\"></span>{{'Open a Support Case'|translate}}</a><a translate=\"\" translate-comment=\"Verb\" ng-click=\"closeCases()\" ng-disabled=\"!caseChosen()\" class=\"btn btn-app btn-sm\">Close Case(s)</a></div></div></div></div></div><div ng-hide=\"!CaseService.sfdcIsHealthy || SearchCaseService.cases.length == 0\" class=\"row\"><div class=\"col-sm-6\"><div class=\"case-count\"><span>{{SearchCaseService.totalCases}} {{displayedCaseText}} &nbsp;</span><a ng-click=\"exports()\" ng-disabled=\"exporting\" ng-hide=\"ie8 || ie9\" translate=\"\" class=\"href\">Export as CSV</a></div></div><div class=\"col-sm-6\"><div rha-filterselect=\"\" class=\"pull-right filter-list\"></div></div></div><div ng-show=\"SearchCaseService.cases.length == 0 &amp;&amp; !SearchCaseService.searching &amp;&amp; securityService.loginStatus.isLoggedIn\" class=\"alert alert-slim\">{{'No cases found with given filters.'|translate}}</div><div id=\"case-list\" infinite-scroll=\"SearchCaseService.doFilter()\" infinite-scroll-disabled=\"SearchCaseService.searching || SearchCaseService.allCasesDownloaded\" infinite-scroll-distance=\"5\" class=\"table-list case-list bulk-closure\"><div ng-repeat=\"case in SearchCaseService.cases\" target=\"_blank\" class=\"list-item\"><input ng-class=\"case.status === &quot;Closed&quot; ? &quot;disabled&quot; : &quot;enabled&quot;\" type=\"checkbox\" ng-model=\"case.selected\" ng-disabled=\"case.status === &quot;Closed&quot;\" class=\"closure\"/><a href=\"#/case/{{case.case_number}}\"><div class=\"row case\"><div class=\"col-sm-4 col-md-2 item-group\"><div class=\"block-icon\"><div class=\"severity\"><!--a(href='https://access.redhat.com/knowledge/solutions/'{{DYNAMIC_VARIABLE}}, target='_blank') {{'(More info)'|translate}}--><i ng-show=\"case.severity === &quot;1 (Urgent)&quot;\" class=\"icon-severity level1\">1</i><i ng-show=\"case.severity === &quot;2 (High)&quot;\" class=\"icon-severity level2\">2</i><i ng-show=\"case.severity === &quot;3 (Normal)&quot;\" class=\"icon-severity level3\">3</i><i ng-show=\"case.severity === &quot;4 (Low)&quot;\" class=\"icon-severity level4\">4</i></div><div class=\"case-id\"><div class=\"subheading\">{{case.case_number}}</div><div class=\"description\">{{case.status}}</div></div></div></div><div class=\"col-sm-8 col-md-6 item-group\"><div class=\"subheading\">{{case.summary}}</div><div class=\"description\">{{case.product}}<span></span>&nbsp;{{case.version}}</div></div><div ng-show=\"CaseService.filterSelect.sortField === &quot;lastModifiedDate&quot;\" class=\"col-sm-12 col-md-2\"><div class=\"item-group change-log\"><div class=\"filed-on\"><span translate=\"translate\">Modified by {{case.last_modified_by}} on {{case.last_modified_date}}</span></div></div></div><div ng-hide=\"CaseService.filterSelect.sortField === &quot;lastModifiedDate&quot;\" class=\"col-sm-12 col-md-2\"><div class=\"item-group change-log\"><div class=\"filed-on\"><span translate=\"translate\">Created by {{case.created_by}} on {{case.created_date}}</span></div></div></div><div class=\"col-sm-12 col-md-2\"><div class=\"item-group change-log\"><div class=\"filed-on\"><span translate=\"translate\">Owned by {{case.contact_name}}</span></div></div></div></div></a></div></div><div ng-show=\"SearchCaseService.searching\"><div class=\"spinner\"></div><p class=\"center\">{{'Loading cases...'|translate}}</p><!--.backdrop--></div></div>");
}]);

angular.module("cases/views/listAttachments.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/listAttachments.html",
    "<div ng-show=\"AttachmentsService.originalAttachments.length == 0\" style=\"padding-bottom: 10px;\" class=\"rha-attachments-section\">{{'No attachments added'|translate}}</div><div ng-show=\"AttachmentsService.originalAttachments.length &gt; 0\" class=\"panel panel-default\"><div class=\"panel-heading\">{{'Attached Files'|translate}}</div><table class=\"table table-hover table-bordered\"><thead><th translate=\"translate\" translate-comment=\"Noun\">Filename</th><th translate=\"translate\" translate-comment=\"Noun\">Description</th><th translate=\"translate\" translate-comment=\"Noun\">Size</th><th translate=\"translate\" translate-comment=\"Noun Attached here means Attached on a particular date\">Attached</th><th translate=\"translate\" translate-comment=\"Noun\">Attached By</th><th translate=\"translate\" translate-comment=\"Verb\">Delete</th></thead><tbody><tr ng-repeat=\"attachment in AttachmentsService.originalAttachments\"><td><a ng-hide=\"attachment.uri == null\" href=\"{{attachment.uri}}\">{{attachment.file_name}}</a><div ng-show=\"attachment.uri == null\">{{attachment.file_name}}</div></td><td>{{attachment.description}}</td><td>{{attachment.length | bytes}}</td><td>{{attachment.created_date | date:'medium'}}</td><td>{{attachment.created_by}}</td><td><!--/Verb--><div ng-show=\"disabled\">{{'Delete'|translate}}</div><!--/Verb--><a ng-click=\"AttachmentsService.removeOriginalAttachment($index)\" ng-hide=\"disabled\">{{'Delete'|translate}}</a></td></tr></tbody></table></div>");
}]);

angular.module("cases/views/listBugzillas.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/listBugzillas.html",
    "<span ng-show=\"loading\" class=\"rha-search-spinner\"></span><div ng-hide=\"CaseService.bugzillaList.bugzilla.length &gt; 0\" style=\"padding-bottom: 10px;\">{{'No linked bugzillas'|translate}}</div><div ng-show=\"CaseService.bugzillaList.bugzilla.length &gt; 0\" class=\"panel panel-default\"><table class=\"table table-hover table-bordered\"><thead><th>{{'Bugzilla Number'|translate}}</th><th>{{'Summary of Request'|translate}}</th></thead><tbody><tr ng-repeat=\"bugzilla in CaseService.bugzillaList.bugzilla\"><td><a href=\"{{bugzilla.resource_view_uri}}\" target=\"_blank\">{{bugzilla.bugzilla_number}}</a></td><td>{{bugzilla.summary}}</td></tr></tbody></table></div>");
}]);

angular.module("cases/views/listFilter.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/listFilter.html",
    "<div class=\"row\"><div class=\"filters\"><div class=\"col-sm-12 col-md-6\"><div class=\"input-group\"><input id=\"rha-searchform-searchbox\" ng-disabled=\"!securityService.loginStatus.isLoggedIn\" placeholder=\"{{placeholder}}\" ng-model=\"SearchCaseService.caseParameters.searchTerm\" ng-change=\"onChange()\" class=\"form-control with-close\"/><span ng-hide=\"hidebutton\" class=\"input-group-btn\"><a ng-show=\"SearchCaseService.caseParameters.searchTerm &amp;&amp; SearchCaseService.caseParameters.searchTerm!== ''\" ng-click=\"clearSearch()\" class=\"close\"><span class=\"web-icon-close\"></span></a><button id=\"rha-searchform-searchbutton\" ng-click=\"doSearch()\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || disableSearchButton\" class=\"btn btn-app\"><i class=\"glyphicon glyphicon-search\"></i>{{''}}</button></span></div></div><div class=\"col-sm-12 col-md-3\"><select id=\"rha-group-select\" chosen=\"chosen\" width=\"&quot;100%&quot;\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-model=\"SearchCaseService.caseParameters.group\" ng-change=\"CaseService.onGroupSelectChanged()\" placeholder=\"Select a Group\" ng-options=\"option.value as option.label for option in CaseService.groupOptions\" options-disabled=\"option.isDisabled for option in CaseService.groupOptions\" ng-init=\"setSearchOptions(true)\"></select></div><div class=\"col-sm-12 col-md-3\"><select id=\"rha-status-select\" chosen=\"chosen\" width=\"&quot;100%&quot;\" ng-disabled=\"!securityService.loginStatus.isLoggedIn\" ng-model=\"SearchCaseService.caseParameters.status\" ng-change=\"CaseService.onSelectChanged()\" ng-options=\"status.value as status.name for status in ConstantsService.statuses\" disable_search_threshold=\"10\"></select></div></div></div>");
}]);

angular.module("cases/views/listNewAttachments.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/listNewAttachments.html",
    "<ul class=\"attachment-list block-list block-list-gray\"><li ng-repeat=\"attachment in AttachmentsService.updatedAttachments\" ng-hide=\"AttachmentsService.updatedAttachments.length &lt;= 0\">{{attachment.file_name}} ({{attachment.length | bytes}})<div type=\"button\" style=\"float: right\" ng-click=\"removeLocalAttachment($index)\" class=\"fa fa-close\"></div><input id=\"rha-case-attachement-fileDescription\" placeholder=\"{{'Please Add File Description'|translate}}\" ng-model=\"attachment.description\" ng-disabled=\"disabled\" class=\"form-control description\"/><!--li(--><!--  ng-repeat='attachment in TreeViewSelectorUtils.getSelectedLeaves(AttachmentsService.backendAttachments)',--><!--  ng-hide='TreeViewSelectorUtils.getSelectedLeaves(AttachmentsService.backendAttachments).length <= 0') {{attachment}}--><!--a.filename Testing.jpg--><!--| span.size (1234)--><!--.description Add Description--><!--  ul.list-group--><!--    li.list-group-item(--><!--      ng-repeat='attachment in AttachmentsService.updatedAttachments',--><!--      ng-hide='AttachmentsService.updatedAttachments.length <= 0') {{attachment.file_name}} ({{attachment.length | bytes}}) - {{attachment.description}}--><!--      button.close(type='button', style='float: right', ng-click='removeLocalAttachment($index)') &times;--><!--    li.list-group-item(--><!--      ng-repeat='attachment in TreeViewSelectorUtils.getSelectedLeaves(AttachmentsService.backendAttachments)',--><!--      ng-hide='TreeViewSelectorUtils.getSelectedLeaves(AttachmentsService.backendAttachments).length <= 0') {{attachment}}--></li></ul>");
}]);

angular.module("cases/views/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/new.html",
    "<div rha-header=\"\" page=\"newCase\"></div><div ng-show=\"securityService.loginStatus.isLoggedIn &amp;&amp; !HeaderService.pageLoadFailure &amp;&amp; CaseService.sfdcIsHealthy &amp;&amp; securityService.loginStatus.userAllowedToManageCases\" class=\"page-header\"><div class=\"row row-short\"><div ng-class=\"RecommendationsService.recommendations.length === 0 ? 'col-sm-12' : 'col-sm-8'\"><div ng-show=\"ProductsService.productsLoading\"><div class=\"spinner\"></div></div><div ng-hide=\"ProductsService.productsLoading\"><section class=\"case-new\"><section class=\"config-options\"><div id=\"rha-case-main-options\"><div ng-if=\"securityService.loginStatus.authedUser.is_internal\"><div class=\"row row-short\"><div class=\"col-sm-3\"><label for=\"rha-account-number\" translate=\"translate\" translate-comment=\"Noun\">Account</label></div><div class=\"col-sm-7 col-md-6\"><div rha-accountselect=\"\"></div></div></div><div class=\"row row-short\"><div class=\"col-sm-3\"><label for=\"rha-owners-select\" translate=\"translate\" translate-comment=\"Noun\">Owner</label></div><div class=\"col-sm-7 col-md-6\"><div rha-ownerselect=\"\"></div></div></div></div><div class=\"row row-short\"><div class=\"col-sm-3\"><label translate=\"translate\" translate-comment=\"Noun\">Product</label></div><div class=\"col-sm-7 col-md-6\"><div rha-productselect=\"\"></div></div></div><div class=\"row row-short\"><div class=\"col-sm-3\"><label translate=\"translate\" translate-comment=\"Noun\">Product Version</label></div><div class=\"col-sm-7 col-md-6\"><div rha-versionselect=\"\"></div></div></div><div class=\"row row-short\"><div class=\"col-sm-3\"><label translate=\"translate\" translate-comment=\"Noun\">Case Name</label></div><div class=\"col-sm-7 col-md-6\"><input id=\"rha-case-summary\" maxlength=\"255\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-change=\"CaseService.validateNewCase();;CaseService.updateLocalStorageForNewCase();updateDescriptionString()\" ng-model=\"CaseService.kase.summary\" ng-focus=\"CaseService.updatingNewCaseSummary=true\" ng-blur=\"CaseService.updatingNewCaseSummary=false\" class=\"form-control\"/></div><div ng-show=\"CaseService.updatingNewCaseSummary &amp;&amp; RecommendationsService.loadingRecommendations\" class=\"col-sm-1\"><div class=\"loader\"><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div></div></div></div><div ng-if=\"isControlGroup\" class=\"row row-short\"><div class=\"col-sm-3\"><div translate=\"translate\" translate-comment=\"Noun\" class=\"label\">Case Description</div></div><div class=\"col-sm-7 col-md-8\"><textarea name=\"\" id=\"rha-description\" cols=\"30\" rows=\"10\" style=\"width: 100%; height: 200px; max-width: 100%;\" ng-model=\"CaseService.kase.description\" ng-change=\"CaseService.validateNewCase();CaseService.updateLocalStorageForNewCase();updateDescriptionString()\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-focus=\"CaseService.updatingNewCaseDescription=true\" ng-blur=\"CaseService.updatingNewCaseDescription=false\"></textarea></div><div ng-show=\"CaseService.updatingNewCaseDescription &amp;&amp; RecommendationsService.loadingRecommendations\" class=\"col-sm-1\"><div class=\"loader\"><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div></div></div></div><div ng-if=\"!isControlGroup\" class=\"row row-short\"><div class=\"col-sm-3\"><div translate=\"translate\" translate-comment=\"Noun\" style=\"margin: 0px;\" class=\"label pre-wrap\">{{CaseService.problemString}}</div></div><div class=\"col-sm-7 col-md-8\"><textarea name=\"\" id=\"rha-problem\" style=\"width: 100%; height: 75px; max-width: 100%;\" ng-model=\"CaseService.kase.problem\" ng-change=\"CaseService.validateNewCase();CaseService.updateLocalStorageForNewCase();updateDescriptionString()\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-focus=\"CaseService.updatingProblemString=true\" ng-blur=\"CaseService.updatingProblemString=false\"></textarea></div><div ng-show=\"CaseService.updatingProblemString &amp;&amp; RecommendationsService.loadingRecommendations\" class=\"col-sm-1\"><div class=\"loader\"><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div></div></div></div><div ng-if=\"!isControlGroup\" class=\"row row-short\"><div class=\"col-sm-3\"><div translate=\"translate\" translate-comment=\"Noun\" style=\"margin: 0px;\" class=\"label pre-wrap\">{{CaseService.environmentString}}</div></div><div class=\"col-sm-7 col-md-8\"><textarea name=\"\" id=\"rha-environment\" style=\"width: 100%; height: 75px; max-width: 100%;\" ng-model=\"CaseService.kase.environment\" ng-change=\"CaseService.validateNewCase();CaseService.updateLocalStorageForNewCase();updateDescriptionString()\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-focus=\"CaseService.updatingEnvironmentString=true\" ng-blur=\"CaseService.updatingEnvironmentString=false\"></textarea></div><div ng-show=\"CaseService.updatingEnvironmentString &amp;&amp; RecommendationsService.loadingRecommendations\" class=\"col-sm-1\"><div class=\"loader\"><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div></div></div></div><div ng-if=\"!isControlGroup\" class=\"row row-short\"><div class=\"col-sm-3\"><div translate=\"translate\" translate-comment=\"Noun\" style=\"margin: 0px;\" class=\"label pre-wrap\">{{CaseService.occuranceString}}</div></div><div class=\"col-sm-7 col-md-8\"><textarea name=\"\" id=\"rha-occurance\" style=\"width: 100%; height: 75px; max-width: 100%;\" ng-model=\"CaseService.kase.occurance\" ng-change=\"CaseService.validateNewCase();CaseService.updateLocalStorageForNewCase();updateDescriptionString()\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-focus=\"CaseService.updatingOccuranceString=true\" ng-blur=\"CaseService.updatingOccuranceString=false\"></textarea></div><div ng-show=\"CaseService.updatingOccuranceString &amp;&amp; RecommendationsService.loadingRecommendations\" class=\"col-sm-1\"><div class=\"loader\"><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div></div></div></div><div ng-if=\"!isControlGroup\" class=\"row row-short\"><div class=\"col-sm-3\"><div translate=\"translate\" translate-comment=\"Noun\" style=\"margin: 0px;\" class=\"label pre-wrap\">{{CaseService.urgencyString}}</div></div><div class=\"col-sm-7 col-md-8\"><textarea name=\"\" id=\"rha-urgency\" style=\"width: 100%; height: 75px; max-width: 100%;\" ng-model=\"CaseService.kase.urgency\" ng-change=\"CaseService.validateNewCase();CaseService.updateLocalStorageForNewCase();updateDescriptionString()\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-focus=\"CaseService.updatingUrgencyString=true\" ng-blur=\"CaseService.updatingUrgencyString=false\"></textarea></div><div ng-show=\"CaseService.updatingUrgencyString &amp;&amp; RecommendationsService.loadingRecommendations\" class=\"col-sm-1\"><div class=\"loader\"><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div><div class=\"circle\">&nbsp;</div></div></div></div><div class=\"row row-very-short\"><div class=\"col-sm-3\"></div><div class=\"col-sm-7 col-md-8\"><div style=\"margin-top: 15px\" ng-show=\"NEW_CASE_CONFIG.showAttachments &amp;&amp; securityService.loginStatus.authedUser.can_add_attachments\"><b>{{'Get faster results.'|translate}}</b>&nbsp; {{'Attaching logs or other diagnostics files typically results in faster resolution.'|translate}}<div ng-bind-html=\"AttachmentsService.parseArtifactHtml()\"></div><div rha-listnewattachments=\"\"></div><div ng-hide=\"ie8 || ie9\" rha-attachlocalfile=\"\" disabled=\"CaseService.submittingCase\"></div><div ng-hide=\"ie8 &amp;&amp; NEW_CASE_CONFIG.isPCM || ie9 &amp;&amp; NEW_CASE_CONFIG.isPCM\" class=\"rha-bottom-border\"><div ng-hide=\"CaseService.submittingCase\" class=\"row rha-create-field\"><div class=\"col-xs-12\"><div ng-show=\"NEW_CASE_CONFIG.showServerSideAttachments\"><div class=\"server-attach-header\">{{'Server File(s) To Attach:'|translate}}<div rha-choicetree=\"\" ng-model=\"attachmentTree\" ng-controller=\"BackEndAttachmentsCtrl\"></div></div></div></div></div></div><div ng-show=\"ie8 &amp;&amp; NEW_CASE_CONFIG.isPCM || ie9 &amp;&amp; NEW_CASE_CONFIG.isPCM\"><form id=\"fileUploaderForm\" enctype=\"multipart/form-data\" method=\"post\" target=\"upload_target\"><div><div class=\"row rha-create-field\"><div class=\"col-xs-6\"><input id=\"newFileUploader\" type=\"file\" value=\"upload\" name=\"file\"/></div><div class=\"col-xs-6\"><div style=\"float: left; word-wrap: break-word; width: 100%;\">{{fileName}}</div></div></div><div class=\"row rha-create-field\"><div style=\"font-size: 80%;\" class=\"col-xs-12\"><div ng-bind-html=\"parseArtifactHtml()\"></div></div><div style=\"font-size: 80%;\" class=\"col-xs-12\"><span>{{'File names must be less than 80 characters. Maximum file size for web-uploaded attachments is 1 GB. Please FTP larger files to dropbox.redhat.com.'|translate}}&nbsp;</span><span><a href=\"https://access.redhat.com/knowledge/solutions/2112\" target=\"_blank\">{{'(More info)'|translate}}</a></span></div></div><div class=\"row rha-create-field\"><div class=\"col-xs-12\"><input id=\"fileDescription\" style=\"float: left;\" type=\"text\" name=\"description\" ng-model=\"ieFileDescription\" placeholder=\"{{'File description'|translate}}\" class=\"form-control\"/></div></div></div></form><iframe id=\"upload_target\" name=\"upload_target\" style=\"width: 0; height: 0; border: 0px solid #fff;\"></iframe></div></div></div></div></div><div id=\"rha-case-more-options\"><div class=\"row row-short\"><div class=\"col-sm-3\"><label>{{'Support Level' |translate}}<span tooltip-html-unsafe=\"{{&quot;To Learn more view the&quot; |translate }}&lt;/br&gt;&lt;a href='/support/offerings/production/sla.html' target='_blank'&gt;{{&quot;Production Support Service Level Agreement&quot;|translate}}&lt;/a&gt;\" tabindex=\"0\" tooltip-trigger=\"click\" class=\"glyphicon glyphicon-question-sign link\"></span></label></div><div class=\"col-sm-7 col-md-6\"><select id=\"rha-supportLevel-select\" chosen=\"chosen\" ng-model=\"CaseService.entitlement\" ng-change=\"CaseService.onChangeFTSCheck()\" width=\"'100%'\" ng-options=\"entitlement as entitlement for entitlement in CaseService.entitlements\"><option value=\"\"></option></select></div></div><div class=\"row row-short\"><div class=\"col-sm-3\"><label class=\"inline-tooltip\"> {{'Severity' |translate}}<span tooltip-html-unsafe=\"{{&quot;To learn more, visit the&quot; |translate }}&lt;/br&gt;&lt;a href='/support/policy/severity' target='_blank'&gt;{{&quot;Red Hat Support Severity Level Definitions&quot;|translate}}&lt;/a&gt;\" tabindex=\"0\" tooltip-trigger=\"click\" class=\"glyphicon glyphicon-question-sign link\"></span></label></div><div class=\"col-sm-7 col-md-6\"><div class=\"row\"><div class=\"col-xs-12\"><select id=\"rha-severity\" chosen=\"chosen\" width=\"&quot;100%&quot;\" ng-model=\"CaseService.kase.severity\" ng-change=\"CaseService.onChangeFTSCheck()\" ng-disabled=\"CaseService.submittingCase\" ng-options=\"s.name for s in CaseService.severities track by s.name\" class=\"form-control\"></select></div></div><div ng-show=\"CaseService.showFts()\" class=\"row row-short\"><div class=\"col-xs-1\"><input type=\"checkbox\" ng-model=\"CaseService.fts\" class=\"pull-left\"/></div><div class=\"col-xs-11\"><div class=\"row\"><div class=\"col-xs-12\"><label translate=\"translate\" translate-comment=\"Noun\" class=\"pull-left\">24x7 Support</label></div></div><div ng-show=\"CaseService.showFts()\" class=\"row row-short\"><div class=\"col-xs-12\"><label translate=\"translate\" translate-comment=\"Noun\" class=\"pull-left\"> 24x7 Contact</label><input ng-model=\"CaseService.fts_contact\" class=\"pull-left margin-left\"/></div></div></div></div></div></div><div class=\"row row-short\"><div class=\"col-sm-3\"><label for=\"email-notifications\" translate=\"translate\">Send Email Notifications to</label></div><div class=\"col-sm-7 col-md-6\"><div ng-show=\"!securityService.loginStatus.isLoggedIn  || CaseService.usersLoading || securityService.loggingIn\" class=\"spinner spinner-inline\"></div><select chosen=\"chosen\" multiple=\"multiple\" data-placeholder=\"{{'Select a User'|translate}}\" ng-disabled=\"updatingList || CaseService.submittingCase\" ng-model=\"notifiedUsers\" id=\"rha-email-notify-select\" width=\"&quot;100%&quot;\" ng-options=\"user as user for user in usersOnAccount\"></select></div></div><div class=\"row row-short\"><div class=\"col-sm-3\"><label translate=\"translate\" translate-comment=\"Noun\">Case Group (Optional)</label></div><div class=\"col-sm-7 col-md-6\"><div rha-groupselect=\"\" ng-init=\"setSearchOptions('false')\"></div></div></div></div><div class=\"row\"><div class=\"col-sm-12\"><button ng-disabled=\"CaseService.submittingCase || CaseService.newCaseIncomplete\" ng-hide=\"CaseService.submittingCase\" ng-click=\"doSubmit($event)\" translate=\"translate\" translate-comment=\"Verb\" class=\"btn btn-app\">Submit</button><a href=\"#/case/list\" ng-hide=\"CaseService.submittingCase\" translate=\"translate\" translate-comment=\"Verb\" class=\"margin-left\">Cancel</a></div></div></section></section></div></div><div ng-hide=\"RecommendationsService.recommendations.length === 0\" class=\"aside col-sm-4\"><div rha-newcaserecommendations=\"\"></div></div></div></div>");
}]);

angular.module("cases/views/newCaseRecommendationsSection.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/newCaseRecommendationsSection.html",
    "<div id=\"rha-recommendation-section\" ng-hide=\"RecommendationsService.recommendations.length === 0\" class=\"recommendations\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><span class=\"inline\">{{'Based on your description, here are some possible solutions'|translate}}</span><div ng-show=\"searchInProgress.value\" class=\"spinner spinner-sm spinner-inline\"></div><span ng-show=\"searchInProgress.value\">{{'Updating Recommendations'|translate}}</span></h4></div><div class=\"panel-body\"><ul><li ng-show=\"RecommendationsService.recommendations.length\" ng-repeat=\"result in results\"><article><header class=\"title\"><a ng-click=\"triggerAnalytics($event)\" href=\"{{result.resource_view_uri}}\" target=\"_blank\"><strong>{{result.title | substring:100 }}</strong></a></header><p class=\"article-content\"><a style=\"word-wrap: break-word;\" ng-click=\"triggerAnalytics($event)\" href=\"{{result.resource_view_uri}}\" target=\"_blank\" ng-bind-html=\"result.abstract\"></a></p></article></li></ul></div><div class=\"pagination\"><div class=\"pull-right\"><button ng-hide=\"currentPage == 1\" ng-click=\"selectPage(currentPage - 1)\" class=\"btn btn-secondary btn-slim\">{{'BACK'|translate}}</button><button ng-hide=\"currentPage == lastPage\" ng-click=\"selectPage(currentPage + 1)\" class=\"btn btn-app btn-slim\">{{'NEXT'|translate}}</button></div></div></div>");
}]);

angular.module("cases/views/ownerSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/ownerSelect.html",
    "<div><div rha-selectloadingindicator=\"\" loading=\"CaseService.usersLoading\" type=\"select2\"><select id=\"rha-owner-select\" chosen=\"chosen\" no_results_text=\"'No match found'|translate\" ng-disabled=\"!securityService.loginStatus.isLoggedIn\" ng-model=\"CaseService.owner\" ng-change=\"CaseService.onOwnerSelectChanged();CaseService.validateNewCase();\" ng-options=\"user.sso_username as (user.first_name + &quot; &quot; + user.last_name + &quot; &lt;&quot; + user.sso_username + &quot;&gt;&quot;) for user in CaseService.users\" width=\"&quot;100%&quot;\"></select></div></div>");
}]);

angular.module("cases/views/proceedWithoutAttachModal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/proceedWithoutAttachModal.html",
    "<div class=\"modal-header\"><h3 translate=\"\">No Files were attached to your case.</h3></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-sm-12\"><div>{{'Attaching logs and diagnostics files greatly improves time to resolution. Do you want to continue without attaching any files?'|translate}}</div></div></div><div style=\"border-top: 1px; solid #cccccc; padding-top: 10px;\" class=\"row\"><div class=\"col-sm-12\"><div class=\"pull-right\"><button id=\"rha-btn-continue\" style=\"margin-left: 10px;\" ng-click=\"closeModal(true)\" class=\"btn btn-app\"><span>{{'Yes, Submit'|translate}}</span></button><button id=\"rha-btn-goBack\" ng-click=\"closeModal(false)\" class=\"btn btn-app margin-left\">{{'No, Go Back'|translate}}</button></div></div></div></div>");
}]);

angular.module("cases/views/productSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/productSelect.html",
    "<select id=\"rha-product-select\" chosen=\"chosen\" width=\"&quot;100%&quot;\" ng-disabled=\"ProductsService.products.length === 0 || !securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" ng-model=\"CaseService.kase.product\" ng-change=\"CaseService.kase.version=&quot;&quot;; ProductsService.getVersions(CaseService.kase.product); CaseService.validateNewCase();CaseService.updateLocalStorageForNewCase()\" ng-options=\"p.code as p.name for p in products\" options-disabled=\"p.isDisabled for p in products\" class=\"form-control\"></select>");
}]);

angular.module("cases/views/requestEscalation.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/requestEscalation.html",
    "<h3 class=\"section-title\">{{'Need to raise a concern to Red Hat Support management?'|translate}}<a href=\"/support/policy/mgt_escalation\" target=\"_blank\" style=\"margin-left:8px\" class=\"link\">{{'Learn More'|translate}}</a></h3><a ng-click=\"requestManagementEscalation()\" class=\"btn btn-app\">{{'Request escalation'|translate}}</a>");
}]);

angular.module("cases/views/requestManagementEscalationModal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/requestManagementEscalationModal.html",
    "<div class=\"modal-header\"><h3 translate=\"\">Request Management Escalation</h3></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-sm-12\"><span>{{'If you feel the issue has become more severe or the case should be a higher priority, please provide a detailed comment, and the case will be reviewed by a support manager.'|translate}}</span><a href=\"https://access.redhat.com/site/support/policy/mgt_escalation\" target=\"_blank\">{{'Learn more'|translate}}</a></div></div><div class=\"row\"><div class=\"col-sm-12\"><div>{{'Comment:'|translate}}</div><textarea style=\"width: 100%; max-width: 100%; height: 200px;\" maxlength=\"32000\" ng-model=\"CaseService.escalationCommentText\" ng-disabled=\"submittingRequest\" ng-change=\"onNewEscalationComment()\" auto-focus=\"\"></textarea></div></div><div class=\"row\"><div class=\"col-sm-12\"><div class=\"pull-right\"><button id=\"rha-case-escalation-submitbutton\" style=\"margin-left: 10px;\" ng-click=\"submitRequestClick(CaseService.escalationCommentText)\" ng-disabled=\"submittingRequest || disableSubmitRequest\" class=\"btn-accent btn\"><span>{{'Submit Request'|translate}}</span></button><button style=\"margin-left: 10px;\" ng-click=\"closeModal()\" ng-disabled=\"submittingRequest\" class=\"btn-accent btn\">{{'Cancel'|translate}}</button><span ng-show=\"submittingRequest\" class=\"rha-search-spinner\"></span></div></div></div></div>");
}]);

angular.module("cases/views/searchBox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/searchBox.html",
    "<div class=\"input-group\"><input id=\"rha-searchform-searchbox\" ng-disabled=\"!securityService.loginStatus.isLoggedIn\" placeholder=\"{{placeholder}}\" ng-model=\"SearchBoxService.searchTerm\" ng-keypress=\"onFilterKeyPress($event)\" ng-change=\"SearchBoxService.onChange()\" class=\"form-control with-close\"/><span ng-hide=\"hidebutton\" class=\"input-group-btn\"><a ng-show=\"SearchBoxService.searchTerm &amp;&amp; SearchBoxService.searchTerm!== ''\" ng-click=\"clearSearch()\" class=\"close\"><span class=\"web-icon-close\"></span></a><button id=\"rha-searchform-searchbutton\" ng-click=\"SearchBoxService.doSearch()\" ng-disabled=\"!securityService.loginStatus.isLoggedIn || SearchBoxService.disableSearchButton\" class=\"btn btn-app\"><i class=\"glyphicon glyphicon-search\"></i>{{''}}</button></span></div>");
}]);

angular.module("cases/views/selectLoadingIndicator.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/selectLoadingIndicator.html",
    "<div id=\"rha-select-loading-indicator\"><progressbar ng-show=\"loading\" max=\"1\" value=\"1\" animate=\"false\" ng-class=\"{select2: type === &quot;select2&quot;, bootstrap: type === &quot;bootstrap&quot;}\" style=\"margin-bottom: 0px;\" class=\"progress-striped active\"></progressbar><div ng-transclude=\"ng-transclude\" ng-hide=\"loading\"></div></div>");
}]);

angular.module("cases/views/severitySelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/severitySelect.html",
    "<span tooltip-html-unsafe=\"{{&quot;Different support-level options might be available based on your account subscriptions. Your support level determines the type of response you can expect for your support case.&quot; |translate }}&lt;br&gt;&lt;/br&gt;&lt;a href='/support/offerings/production/sla.html' target='_blank'&gt;{{&quot;View Production Support Service Level Agreement&quot;|translate}}&lt;/a&gt;\" tabindex=\"0\" tooltip-trigger=\"hover\" class=\"glyphicon glyphicon-question-sign tooltip pull-right\"></span><select chosen=\"chosen\" width=\"'100%'\" name=\"severity\" ng-model=\"CaseService.kase.severity\" ng-options=\"s.name for s in CaseService.severities track by s.name\"></select>");
}]);

angular.module("cases/views/statusSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/statusSelect.html",
    "<select id=\"rha-status-select\" chosen=\"chosen\" width=\"&quot;100%&quot;\" ng-disabled=\"!securityService.loginStatus.isLoggedIn\" ng-model=\"CaseService.status\" ng-change=\"CaseService.onSelectChanged()\" ng-options=\"status.value as status.name for status in statuses\" disable_search_threshold=\"10\"></select>");
}]);

angular.module("cases/views/typeSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/typeSelect.html",
    "<select id=\"rha_type_select\" chosen=\"chosen\" ng-model=\"CaseService.kase.type\" ng-change=\"CaseService.onSelectChanged()\" width=\"&quot;100%&quot;\" ng-options=\"type.name for type in CaseService.types track by type.name\"></select>");
}]);

angular.module("cases/views/versionSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cases/views/versionSelect.html",
    "<select id=\"rha-product-version-select\" chosen=\"chosen\" width=\"&quot;100%&quot;\" ng-model=\"CaseService.kase.version\" ng-options=\"v for v in versions\" ng-change=\"CaseService.validateNewCase();CaseService.updateLocalStorageForNewCase()\" ng-disabled=\"ProductsService.versionDisabled || CaseService.kase.product === undefined || !securityService.loginStatus.isLoggedIn || CaseService.submittingCase\" class=\"form-control\"></select><div ng-show=\"ProductsService.showVersionSunset()\" class=\"versionSunsetMessage\"><span>{{'This release is now retired, please refer to the recommended FAQ prior to filing a case'|translate}}</span></div>");
}]);

angular.module("log_viewer/views/logTabs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("log_viewer/views/logTabs.html",
    "<div tabset ng-show='tabs.length > 0'>\n" +
    "    <div tab active=\"tab.active\" ng-repeat=\"tab in tabs\">\n" +
    "        <div tab-heading>{{tab.shortTitle}}\n" +
    "            <a ng-click=\"removeTab($index)\" href=''>\n" +
    "                <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <a popover=\"Click to refresh log file.\" popover-trigger=\"mouseenter\" popover-placement=\"right\" ng-click=\"refreshTab($index)\">\n" +
    "                    <span class=\"glyphicon glyphicon-refresh\"></span>\n" +
    "                </a>\n" +
    "                <h3 class=\"panel-title\" style=\"display: inline\">{{tab.longTitle}}</h3>\n" +
    "                <div class=\"pull-right\" id=\"overlay\" popover=\"Select text and click to perform Red Hat Diagnose\" popover-trigger=\"mouseenter\" popover-placement=\"left\">\n" +
    "                    <button ng-disabled=\"isDisabled\" id=\"diagnoseButton\" type=\"button\" class=\"btn btn-sm btn-primary diagnoseButton\" ng-click=\"diagnoseText()\" translate='' >Red Hat Diagnose</button>\n" +
    "                </div>\n" +
    "                <a class=\"tabs-spinner\" ng-class=\"{ showMe: isLoading }\">\n" +
    "                    <span class=\"rha-search-spinner\"></span>\n" +
    "                </a>\n" +
    "\n" +
    "                <br>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\" rha-filldown ng-style=\"{ height: windowHeight }\">\n" +
    "\n" +
    "                <pre id=\"resizeable-file-view\" class=\"no-line-wrap\">{{tab.content}}</pre>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("log_viewer/views/log_viewer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("log_viewer/views/log_viewer.html",
    "<div id=\"log_view_main\" style=\"max-height: 500px;\">\n" +
    "    <div class=\"container-offset\">\n" +
    "        <div rha-header page=\"logViewer\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid\" ng-controller=\"logViewerController\" ng-mouseup=\"enableDiagnoseButton()\">\n" +
    "        <div rha-navsidebar></div>\n" +
    "        <div class=col-fluid>\n" +
    "            <div rha-recommendations></div>\n" +
    "            <div class=\"col-fluid\">\n" +
    "                <div ng-controller=\"TabsDemoCtrl\" ng-class=\"{ showMe: solutionsToggle }\">\n" +
    "                    <div rha-logsinstructionpane></div>\n" +
    "                    <div rha-logtabs></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("log_viewer/views/logsInstructionPane.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("log_viewer/views/logsInstructionPane.html",
    "<div class=\"panel panel-default rha-logsinstructionpane\" ng-hide=\"tabs.length > 0\" rha-filldown ng-style=\"{ height: windowHeight }\" style=\"overflow:auto\">\n" +
    "                        <div class=\"panel-body\" >\n" +
    "                            <div>\n" +
    "                                <h2 translate=''>Log File Viewer</h2>\n" +
    "                                <p>\n" +
    "                                    <h3 translate=''>The log file viewer gives the ability to diagnose application logs as well as file a support case with Red Hat Global Support Services.\n" +
    "                                    </h3>\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <br>\n" +
    "                                <h4>\n" +
    "                                    <span class=\"glyphicon glyphicon-refresh\"></span>&nbsp;{{'Select Log'|translate}}</h4>\n" +
    "                                <p translate>\n" +
    "                                    Simply navigate to and select a log file from the list on the left and click the 'Select File' button. </p>\n" +
    "\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <br>\n" +
    "                                <h4>\n" +
    "                                    <span class=\"glyphicon glyphicon-search\"></span>&nbsp;{{'Diagnose'|translate}}\n" +
    "                                </h4>\n" +
    "                                <p translate>Once you have selected your log file then you may diagnose any part of the log file and clicking the 'Red Hat Diagnose' button. This will then display relevant articles and solutons from our Red Hat Knowledge base.</p>\n" +
    "\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <br>\n" +
    "                                <h4>\n" +
    "                                    <span class=\"glyphicon glyphicon-plus\"></span>&nbsp;{{'Open a New Support Case'|translate}}\n" +
    "                                </h4>\n" +
    "                                <p translate>In the event that you would still like to open a support case, select 'Open a New Support Case'. The case will be pre-populated with the portion of the log previously selected.</p>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "");
}]);

angular.module("log_viewer/views/navSideBar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("log_viewer/views/navSideBar.html",
    "<div class=\"rha-navsidebar col-xs-3\" ng-class=\"{ showMe: sidePaneToggle }\" rha-filldown ng-style=\"{height: windowHeight }\">\n" +
    "    <div class=\"hideable-side-bar\" ng-class=\"{ showMe: sidePaneToggle }\">\n" +
    "        <div ng-controller=\"DropdownCtrl\" ng-init=\"init()\">\n" +
    "            <h4 class=\"file-list-title\" ng-class=\"{ showMe: hideDropdown}\" translate=''>Available Log Files</h4>\n" +
    "            <div class=\"btn-group\" ng-class=\"{ hideMe: hideDropdown}\">\n" +
    "                <div class=\"machines-spinner\" ng-class=\"{ showMe: loading }\">\n" +
    "                    <span class=\"rha-search-spinner pull-right\"></span>\n" +
    "                </div>\n" +
    "\n" +
    "                <button type=\"button\" class=\"dropdown-toggle btn btn-sm btn-primary\" data-toggle=\"dropdown\">\n" +
    "                    {{machinesDropdownText}}\n" +
    "                    <span class=\"caret\"></span>\n" +
    "                </button>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                    <li ng-repeat=\"choice in items\" ng-click=\"machineSelected()\"><a>{{choice}}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div ng-controller=\"fileController\">\n" +
    "                <div id=\"fileList\" rha-filldown ng-style=\"{ height: windowHeight }\" class=\"fileList\" >\n" +
    "                    <div ng-dblclick=\"selectItem(item)\" data-angular-treeview=\"true\" data-tree-id=\"mytree\" data-tree-model=\"roleList\" data-node-id=\"roleId\" data-node-label=\"roleName\" data-node-children=\"children\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <button ng-disabled=\"retrieveFileButtonIsDisabled.check\" type=\"button\" class=\"pull-right btn btn-sm btn-primary\" ng-click=\"fileSelected()\" translate=''>\n" +
    "                    Select File</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <a ng-click=\"sidePaneToggle = !sidePaneToggle\">\n" +
    "        <span ng-class=\"{ showMe: sidePaneToggle }\" class=\"pull-right glyphicon glyphicon-chevron-left left-side-glyphicon\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("log_viewer/views/recommendations.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("log_viewer/views/recommendations.html",
    "<div class=\"col-xs-6 pull-right solutions\" rha-filldown ng-style=\"{height: windowHeight }\" ng-class=\"{ showMe: showSolutions }\">\n" +
    "    <div id=\"resizeable-solution-view\" rha-filldown class=\"resizeable-solution-view\" ng-class=\"{ showMe: showSolutions }\" ng-style=\"{height: windowHeight }\" rha-accordionsearchresults='' opencase='true' ng-controller='SearchController'>\n" +
    "    </div>\n" +
    "    <a ng-click=\"toggleSolutions()\">\n" +
    "        <span ng-class=\"{ showMe: showSolutions }\" class=\"glyphicon glyphicon-chevron-left right-side-glyphicon\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("escalation/views/iceEscalation.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("escalation/views/iceEscalation.html",
    "<div rha-header=\"\" page=\"iceEscalationView\" class=\"page-header\"></div><div id=\"redhat-access-escalations\" ng-show=\"securityService.loginStatus.authedUser.is_internal\" class=\"container-offset\"><h1><span class=\"rha-bold\">{{'GSS ICE Form'|translate}}</span></h1><p><span>{{'This Internal Customer Escalation submission form can be used by any Red Hat associate to obtain management support for issues that require attention outside of the standard support process. Please visit the '|translate}}</span><a target=\"_blank\" href=\"https://home.corp.redhat.com/node/66782\">{{'GSS ICE FAQ'|translate}}</a><span> {{'for more information about the ICE process.'|translate}}    </span></p><p><span>{{'Once the request is submitted, and ICE ticket will be raised in the GSS case management system and brought to the attention of the GSS leadership team.'|translate}}</span></p><p><span>{{'The requestor will then receive an email (at the email address provided below) with the ICE ticket number and additional information on how to track the progress of their issue.'|translate}}</span></p><p><span>{{'Please provide as much information/detail as possible in the form.'|translate}}</span></p><p><span>{{'GSS is currently working on enhancing the ICE process through the use of email. Watch this space for more details as they become available.'|translate}}</span></p><p><span>{{'If this form is not working for any reason please submit a ticket at helpdesk@redhat.com noting a problem with GSS Ticketing and the ICE form'|translate}}</span></p><p><span id=\"requireFieldInfo\" class=\"rha-bold\">{{'* All fields are mandatory.'|translate}}</span></p><form id=\"rha-case-escalation\" class=\"form-horizontal\"><div id=\"rha-escalation\" ng-controller=\"EscalationRequest\" class=\"row ng-scope\"><div class=\"col-md-7 col-md-offset-1 push-bottom\"><fieldset><legend><span class=\"number\">1</span>{{'Requestor'|translate}}</legend><div class=\"form-group\"><label for=\"rha-requestor-email\" class=\"col-sm-5 control-label\">{{'Your Email address'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-requestor-email\" ng-model=\"EscalationRequestService.requestorEmail\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'Your Red Hat Email Address'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-requestor-phone\" class=\"col-sm-5 control-label\">{{'Your Phone Number'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-requestor-phone\" ng-model=\"EscalationRequestService.requestorPhone\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'Your Red Hat Contact Phone Number'|translate}}</span></div></div></fieldset></div><div class=\"col-md-7 col-md-offset-1 push-bottom\"><fieldset><legend><span class=\"number\">2</span>{{'Customer'|translate}}</legend><div class=\"form-group\"><label for=\"rha-account-number\" class=\"col-sm-5 control-label\">{{'Customer Account Number'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-account-number\" ng-model=\"EscalationRequestService.accountNumber\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-customer-name\" class=\"col-sm-5 control-label\">{{'Customer Contact Name'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-customer-name\" ng-model=\"EscalationRequestService.customerName\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/></div></div><div class=\"form-group\"><label for=\"rha-customer-contact-email\" class=\"col-sm-5 control-label\">{{'Customer Contact Email'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-customer-contact-email\" ng-model=\"EscalationRequestService.customerEmail\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/></div></div><div class=\"form-group\"><label for=\"rha-customer-contact-phone-number\" class=\"col-sm-5 control-label\">{{'Customer Contact Number'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-customer-contact-phone-number\" ng-model=\"EscalationRequestService.customerPhone\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'For example: 1-888-467-3342'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-geo\" class=\"col-sm-5 control-label\">{{'Customer GEO'|translate}}</label><div class=\"col-sm-7\"><select id=\"rha-geo\" ng-model=\"EscalationRequestService.geo\" ng-options=\"geo for geo in iceGeoList\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control productSelect nonEmpty\"></select><span class=\"help-block\">NA-North America, EMEA-Europe,the Middle East and Africa, LATAM-Latin America, APAC-Asia Pacific</span></div></div></fieldset></div><div class=\"col-md-7 col-md-offset-1 push-bottom\"><fieldset><legend><span class=\"number\">3</span>{{'Case Information'|translate}}</legend><div class=\"form-group\"><label for=\"rha-case-number\" class=\"col-sm-5 control-label\">{{'Red Hat Support Ticket Number'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-case-number\" ng-model=\"EscalationRequestService.caseNumber\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'This is your 8 digit Red Hat Support ticket number'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-already-escalated\" class=\"col-sm-5 control-label\">{{'Already Escalated?'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-already-escalated\" type=\"checkbox\" ng-model=\"EscalationRequestService.alreadyEscalated\" class=\"nonEmpty\"/></div></div><div class=\"form-group\"><label for=\"rha-issue-description\" class=\"col-sm-5 control-label\">{{'Issue Description'|translate}}</label><div class=\"col-sm-7\"><textarea id=\"rha-issue-description\" ng-model=\"EscalationRequestService.issueDescription\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"></textarea><span class=\"help-block\">{{'Please provide as much detail as possible to help us understand the issue, for example:'|translate}}<p><span>{{'Reason for the escalation, the business context, the competitive situation, past support experience'|translate}}</span></p><p><span>{{'If you are requesting an account review, if this is related to aspecific problem/ticket or a series of problems/tickets or if this is a general or generic complain'|translate}}</span></p><p><span>{{'If this is a request for information from you or the customer and if you need us to contact you to discuss the issues.'|translate}}</span></p></span></div></div><div class=\"form-group\"><label for=\"rha-expectations\" class=\"col-sm-5 control-label\">{{'Expectation'|translate}}</label><div class=\"col-sm-7\"><textarea id=\"rha-expectations\" ng-model=\"EscalationRequestService.expectations\" ng-change=\"iceMandatoryFieldCheck()\" class=\"form-control nonEmpty\"></textarea><span class=\"help-block\">{{'Please provide expectations and desired outcomes from yourself and from the customer'|translate}}</span></div></div></fieldset></div><div class=\"clear\"></div><div class=\"col-md-7 col-md-offset-1 push-bottom\"><button ng-click=\"submitEscalationRequest(ESCALATION_TYPE.ice)\" ng-disabled=\"disableSendRequest\" translate=\"\" class=\"btn btn-primary\">Send Request</button></div></div></form></div>");
}]);

angular.module("escalation/views/partnerEscalation.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("escalation/views/partnerEscalation.html",
    "<div rha-header=\"\" page=\"partnerEscalationView\" class=\"page-header\"></div><div id=\"redhat-access-escalations\" ng-hide=\"HeaderService.showPartnerEscalationError\" class=\"container-offset\"><h1><span class=\"rha-bold\">{{'Priority Customer Support Routing'|translate}}</span></h1><span>{{'Red Hat Global Support Services (GSS) and Red Hat Global Partner Enablement have  established Partner Escalation to enable our strategic partners to escalate unresolved or mission critical customer support cases to GSS leadership. This process will help you and Red Hat to better manage your customers issues and provide a process for driving these issues to resolution.'|translate}}</span><p>{{'Once your request is submitted, a partner escalation case will be opened with GSS and the GSS leadership team will be notified. You will then receive an email at the email address provided below with the partner escalation case number and additional information on how to track progress.'|translate}}</p><p> <span>{{'Please'|translate}}</span><a target=\"_blank\" href=\"https://access.redhat.com/site/articles/546553\">{{' click here '|translate}}</a><span>{{'for more information.'|translate}}</span></p><p><span>{{'Please provide as much information as possible in the form.'|translate}}  </span></p><p><span id=\"requireFieldInfo\" class=\"rha-bold\">{{'* marked fields are mandatory fields.'|translate}} </span></p><form id=\"rha-case-escalation\" class=\"form-horizontal\"><div id=\"rha-escalation\" ng-controller=\"EscalationRequest\" class=\"row ng-scope\"><div class=\"col-md-7 col-md-offset-1 push-bottom\"><fieldset><legend><span class=\"number\">1</span>{{'Requestor'|translate}}</legend><div class=\"form-group\"><label for=\"rha-requestor-email\" class=\"col-sm-5 control-label\">{{'Your Email address'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-requestor-email\" ng-model=\"EscalationRequestService.requestorEmail\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'This should be the email address associated with your Red Hat Customer Portal or Partner Center login'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-requestor-phone\" class=\"col-sm-5 control-label\">{{'Your Phone Number'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-requestor-phone\" ng-model=\"EscalationRequestService.requestorPhone\" class=\"form-control nonEmpty\"/></div></div></fieldset></div><div class=\"col-md-7 col-md-offset-1 push-bottom\"><fieldset><legend><span class=\"number\">2</span>{{'Customer'|translate}}</legend><div class=\"form-group\"><label for=\"rha-account-number\" class=\"col-sm-5 control-label\">{{'Customer Account Number'|translate}} *</label><div class=\"col-sm-7\"><input id=\"rha-account-number\" ng-model=\"EscalationRequestService.accountNumber\" ng-change=\"partnerMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'Please request the account number from the customer if possible, otherwise use your Red Hat account number.The account number can be found by clicking on the username in the top right corner of this page.'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-customer-name\" class=\"col-sm-5 control-label\">{{'Customer Contact Name'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-customer-name\" ng-model=\"EscalationRequestService.customerName\" class=\"form-control nonEmpty\"/></div></div><div class=\"form-group\"><label for=\"rha-customer-contact-email\" class=\"col-sm-5 control-label\">{{'Customer Contact Email'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-customer-contact-email\" ng-model=\"EscalationRequestService.customerEmail\" class=\"form-control nonEmpty\"/></div></div><div class=\"form-group\"><label for=\"rha-customer-contact-phone-number\" class=\"col-sm-5 control-label\">{{'Customer Contact Number'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-customer-contact-phone-number\" ng-model=\"EscalationRequestService.customerPhone\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'For example: 1-888-467-3342'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-geo\" class=\"col-sm-5 control-label\">{{'Customer GEO'|translate}} *</label><div class=\"col-sm-7\"><select id=\"rha-geo\" ng-model=\"EscalationRequestService.geo\" ng-options=\"geo for geo in partnerGeoList\" ng-change=\"partnerMandatoryFieldCheck()\" class=\"form-control productSelect nonEmpty\">             </select><span class=\"help-block\">NA-North America, EMEA-Europe,the Middle East and Africa, LATAM-Latin America, APAC-Asia Pacific</span></div></div></fieldset></div><div class=\"col-md-7 col-md-offset-1 push-bottom\"><fieldset><legend><span class=\"number\">3</span>{{'Case Information'|translate}}</legend><div class=\"form-group\"><label for=\"rha-case-number\" class=\"col-sm-5 control-label\">{{'Red Hat Support Ticket Number'|translate}} *</label><div class=\"col-sm-7\"><input id=\"rha-case-number\" ng-model=\"EscalationRequestService.caseNumber\" ng-change=\"partnerMandatoryFieldCheck()\" class=\"form-control nonEmpty\"/><span class=\"help-block\">{{'This is your 8 digit Red Hat Support ticket number'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-already-escalated\" class=\"col-sm-5 control-label\">{{'Already Escalated?'|translate}}</label><div class=\"col-sm-7\"><input id=\"rha-already-escalated\" type=\"checkbox\" ng-model=\"EscalationRequestService.alreadyEscalated\" class=\"nonEmpty\"/></div></div><div class=\"form-group\"><label for=\"rha-issue-description\" class=\"col-sm-5 control-label\">{{'Issue Description'|translate}} *</label><div class=\"col-sm-7\"><textarea id=\"rha-issue-description\" ng-model=\"EscalationRequestService.issueDescription\" ng-change=\"partnerMandatoryFieldCheck()\" class=\"form-control nonEmpty\"></textarea><span class=\"help-block\">{{'Please provide as much detail as possible to help us understand the issue, for example:Reason for the escalation, the business context, the competitive situation, past support experience'|translate}}</span></div></div><div class=\"form-group\"><label for=\"rha-expectations\" class=\"col-sm-5 control-label\">{{'Expectation'|translate}}</label><div class=\"col-sm-7\"><textarea id=\"rha-expectations\" ng-model=\"EscalationRequestService.expectations\" class=\"form-control nonEmpty\"></textarea><span class=\"help-block\">{{'Please provide expectations and desired outcomes from yourself and from the customer'|translate}}</span></div></div></fieldset></div><div class=\"clear\"></div><div class=\"col-md-7 col-md-offset-1 push-bottom\"><button ng-click=\"submitEscalationRequest(ESCALATION_TYPE.partner)\" ng-disabled=\"disableSendRequest\" translate=\"\" class=\"btn btn-primary\">Send Request</button></div></div></form></div>");
}]);
