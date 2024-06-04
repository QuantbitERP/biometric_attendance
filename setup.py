from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in biometric_attendance/__init__.py 
# newly added
from biometric_attendance import __version__ as version

setup(
	name="biometric_attendance",
	version=version,
	description="Biometric Attendance Sync Used for getting Data from Biometric Machine",
	author="quantbit technologies pvt ltd",
	author_email="contact@erpdata.in",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)