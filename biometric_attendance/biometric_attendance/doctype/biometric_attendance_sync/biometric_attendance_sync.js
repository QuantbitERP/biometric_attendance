// Copyright (c) 2024, Quantbit Technologies Pvt. Ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on('Biometric Attendance Sync', {
	from_date: function(frm) {
		frm.call({
			method:"check_dates",
			doc:frm.doc
		})
	},
	to_date: function(frm) {
		frm.call({
			method:"check_dates",
			doc:frm.doc
		})
	},
	sync: function(frm) {
		// Show the first message
		let first_msg = frappe.msgprint("Please Wait ! Your Attendance Data is loading...");
	
		frm.call({
			method: "sync_data",
			doc: frm.doc,
			callback: (r) => {
				if (r) {
					// Hide the first message
					frappe.hide_msgprint(first_msg);
					
					// Show the second message
					frappe.msgprint("Attendance Data loaded Successfully...");
				}
			}
		});
	},
	setup: function(frm) {
		frm.call({
			method:"get_current_date",
			doc:frm.doc
		})
	},
});
