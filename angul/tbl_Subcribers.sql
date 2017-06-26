CREATE TABLE [dbo].[tbl_Subcribers]
(
    [SubscriberID] INT NOT NULL PRIMARY KEY, 
    [MailID] NVARCHAR(50) NOT NULL, 
    [SubscribedDate] DATETIME2 NOT NULL
)