﻿select ESTIMATE_ID_SQ  from YES_ESTIMATE_COMMON where ESTIMATED_BY_ID = 'H177356' or ESTIMATED_BY_ID = 'H177350'  and CREATED_ON_DT > DATEADD(month, -24, GETDATE()) ;