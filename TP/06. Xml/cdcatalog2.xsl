<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <div style="float:right">
    <h2>Ma CD Collection</h2> 
    <table border="1">
      <tr bgcolor="#00ffff">
	<xsl:for-each select="catalog/cd[1]/*">
         <th align="left"><xsl:value-of select="name()" /></th>
      </xsl:for-each>
      </tr>
      <xsl:for-each select="catalog/cd">
      <tr>
     	<xsl:for-each select="*">
	  <td><xsl:value-of select="." /></td>
	 </xsl:for-each>
      </tr>
      </xsl:for-each>
  </table>
  </div>
</xsl:template>

</xsl:stylesheet>
