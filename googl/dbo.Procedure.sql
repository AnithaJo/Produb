CREATE PROCEDURE [dbo].[Procedure]
	@param1 nvarchar(10),
	@param2 nvarchar(25),
	@param3 nvarchar(10)
AS
BEGIN
	SELECT AVG(CONVERT(float, ELAPSED_TIME)) as Time from YES_Instrumentation where TECHNOLOGY_CD=@param1 AND USER_CURRENT_REGION=@param2 and TASK=@param3 group by USER_CURRENT_REGION;
RETURN Time
END
