/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.53
 * Generated at: 2015-12-29 03:56:07 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.views.configuration_005ftree;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class Dialogs_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<input type=\"hidden\" id=\"currentConfigurationTreeId\" value=\"\"/>\n");
      out.write("<div data-dojo-type=\"dijit/Dialog\" id=\"editLineDialog\" title=\"Edit \" style=\"width: 700px; display: none\">\n");
      out.write("  <table>\n");
      out.write("    <tr class=\"dijitDialogPaneContentArea\">\n");
      out.write("      <td>\n");
      out.write("        <label for='editLineType'>\n");
      out.write("          Type:\n");
      out.write("        </label>\n");
      out.write("      </td>\n");
      out.write("      <td>\n");
      out.write("        <span id=\"editLineType\" class=\"directive_type\"></span>\n");
      out.write("      </td>\n");
      out.write("    </tr>\n");
      out.write("    <tr class=\"dijitDialogPaneContentArea\">\n");
      out.write("      <td>\n");
      out.write("        <label for='editLineValue'>\n");
      out.write("          Value:\n");
      out.write("        </label>\n");
      out.write("      </td>\n");
      out.write("      <td>\n");
      out.write("        <input data-dojo-type=\"dijit/form/ValidationTextBox\" data-dojo-props=\"required: true\" id=\"editLineValue\" style=\"width: 630px;\" />\n");
      out.write("      </td>\n");
      out.write("    </tr>\n");
      out.write("  </table>\n");
      out.write("\n");
      out.write("  <input type=\"hidden\" id=\"editLineLineType\" value=\"\"/>\n");
      out.write("  <input type=\"hidden\" id=\"editLineLineOfStart\" value=\"\"/>\n");
      out.write("  <input type=\"hidden\" id=\"editLineFile\" value=\"\"/>\n");
      out.write("  <input type=\"hidden\" id=\"editLineLineOfEnd\" value=\"\"/>\n");
      out.write("\n");
      out.write("  <div class=\"dijitDialogPaneActionBar\">\n");
      out.write("    <button id=\"editLineSubmit\" data-dojo-type=\"dijit.form.Button\" type=\"button\">\n");
      out.write("      Submit\n");
      out.write("    </button>\n");
      out.write("    <button id=\"editLineCancel\" data-dojo-type=\"dijit.form.Button\" type=\"button\">\n");
      out.write("      Cancel\n");
      out.write("    </button>\n");
      out.write("  </div>\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("<div data-dojo-type=\"dijit/Dialog\" id=\"addLineDialog\" title=\"Add \" style=\"width: 700px; display: none\">\n");
      out.write("  <table>\n");
      out.write("    <tr class=\"dijitDialogPaneContentArea\">\n");
      out.write("      <td>\n");
      out.write("        <label for='addLineType'>\n");
      out.write("          Type:\n");
      out.write("        </label>\n");
      out.write("      </td>\n");
      out.write("      <td>\n");
      out.write("        <input data-dojo-type=\"dijit/form/ValidationTextBox\" data-dojo-props=\"required: true\" id=\"addLineType\" style=\"width: 630px;\" />\n");
      out.write("      </td>\n");
      out.write("    </tr>\n");
      out.write("    <tr class=\"dijitDialogPaneContentArea\">\n");
      out.write("      <td>\n");
      out.write("        <label for='addLineValue'>\n");
      out.write("          Value:\n");
      out.write("        </label>\n");
      out.write("      </td>\n");
      out.write("      <td>\n");
      out.write("        <input data-dojo-type=\"dijit/form/ValidationTextBox\" data-dojo-props=\"required: true\" id=\"addLineValue\" style=\"width: 630px;\" />\n");
      out.write("      </td>\n");
      out.write("    </tr>\n");
      out.write("  </table>\n");
      out.write("\n");
      out.write("  <input type=\"hidden\" id=\"addLineBeforeLineType\" value=\"\"/>\n");
      out.write("  <input type=\"hidden\" id=\"addLineLineType\" value=\"\"/>\n");
      out.write("  <input type=\"hidden\" id=\"addLineFile\" value=\"\"/>\n");
      out.write("  <input type=\"hidden\" id=\"addLineLineOfStart\" value=\"\"/>\n");
      out.write("\n");
      out.write("  <div class=\"dijitDialogPaneActionBar\">\n");
      out.write("    <button id=\"addLineSubmit\" data-dojo-type=\"dijit.form.Button\" type=\"button\">\n");
      out.write("      Submit\n");
      out.write("    </button>\n");
      out.write("    <button id=\"addLineCancel\" data-dojo-type=\"dijit.form.Button\" type=\"button\">\n");
      out.write("      Cancel\n");
      out.write("    </button>\n");
      out.write("  </div>\n");
      out.write("</div>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
