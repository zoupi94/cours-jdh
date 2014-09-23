<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <div>
    <h2>Ma CD Collection</h2> 
    <ul>
      <xsl:for-each select="catalog/cd">
      <li title="{title} - {artist} ({company})"><xsl:value-of select="title" />
           (<xsl:choose>
	    <xsl:when test="country = 'USA'"> 
		**<xsl:value-of select="country" />**
	    </xsl:when>
	    <xsl:otherwise> 
		<xsl:value-of select="country" />
	    </xsl:otherwise>
	</xsl:choose> )
      </li>
      </xsl:for-each>
  </ul>
  </div>
</xsl:template>

</xsl:stylesheet>
